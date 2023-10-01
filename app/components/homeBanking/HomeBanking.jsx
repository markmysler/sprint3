import { useEffect, useState } from "react";
import Cuentas from "./homeBankingWindows/Cuentas";
import Pagos from "./homeBankingWindows/Pagos";
import Transferencias from "./homeBankingWindows/Transferencias";
import Prestamos from "./homeBankingWindows/Prestamos";
import Convertidor from "./homeBankingWindows/Convertidor";
import Sidebar from "../sidebar/SideBar";
import { useRouter } from "next/router";

function HomeBanking({ users, rates }) {
	const router = useRouter();
	const [user, setUser] = useState();
	const { email } = router.query;
	useEffect(() => {
		const userData = window.localStorage.getItem(email);
		setUser(JSON.parse(userData));
		setPage("cuentas");
	}, []);

	const [page, setPage] = useState();
	const [show, setShow] = useState();
	console.log(user);
	const getElement = () => {
		switch (page) {
			case "cuentas":
				return <Cuentas user={user} />;
			case "pagos":
				return <Pagos user={user} />;
			case "transferencias":
				return <Transferencias user={user} users={users} />;
			case "prestamos":
				return <Prestamos user={user} />;
			case "convertidor":
				return <Convertidor user={user} rates={rates} />;
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
