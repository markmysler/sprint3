import Link from "next/link";
import "../homeBanking/homeBankingWindows/homeBankingWindows.css";
import "../../globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
function Inicio() {
	const router = useRouter();
	const redirect = (url) => {
		router.push(url);
	};
	return (
		<div className="inicioPage">
			<Head>
				<title>ITBANK - Inicio</title>
			</Head>
			<h1>Inicio</h1>
			<div className="buttonDiv">
				<button id="button1" onClick={() => redirect("/login")}>
					<Link href="/login">Log In</Link>
				</button>
				<button id="button2" onClick={() => redirect("/signup")}>
					<Link href="/signup">Sign up</Link>
				</button>
			</div>
		</div>
	);
}

export default Inicio;
