import { useEffect, useState } from "react";
import Cuentas from "./homeBankingWindows/Cuentas";
import Pagos from "./homeBankingWindows/Pagos";
import Transferencias from "./homeBankingWindows/Transferencias";
import Prestamos from "./homeBankingWindows/Prestamos";
import Convertidor from "./homeBankingWindows/Convertidor";
import Sidebar from "../sidebar/SideBar";
import { useRouter } from "next/router";
import Contacto from "./homeBankingWindows/Contacto";

function HomeBanking({ users, rates }) {
	const router = useRouter();
	const [user, setUser] = useState();
	const { email } = router.query;
	useEffect(() => {
		const userData = window.localStorage.getItem(email);
		setUser(JSON.parse(userData));
		setPage("cuentas");
	}, []);

	function updateBalance(array, currency, amount) {
		for (let i = 0; i < array.length; i++) {
			if (array[i][currency] !== undefined) {
				if (array[i][currency] >= amount) {
					array[i][currency] -= amount;
				} else {
					alert("Fondos insuficientes");
					return array;
				}
			}
		}
		return array;
	}

	const [page, setPage] = useState();
	const [show, setShow] = useState();
	const getElement = () => {
		switch (page) {
			case "cuentas":
				return <Cuentas user={user} />;
			case "pagos":
				return (
					<Pagos
						user={user}
						users={users}
						updateBalance={updateBalance}
					/>
				);
			case "transferencias":
				return (
					<Transferencias
						updateBalance={updateBalance}
						user={user}
						users={users}
					/>
				);
			case "prestamos":
				return <Prestamos user={user} />;
			case "convertidor":
				return <Convertidor user={user} rates={rates} />;
			case "contacto":
				return <Contacto />;
			default:
				return <p>Loading...</p>;
		}
	};
	useEffect(() => {
		setShow(getElement());
	}, [page]);
	return (
		<>
			<div className="homeBankingDiv">{show ? show : ""}</div>

			<Sidebar user={user} page={page} setPage={setPage} />
		</>
	);
}

export default HomeBanking;
