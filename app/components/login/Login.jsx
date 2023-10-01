import { useRouter } from "next/router";
import "../../globals.css";
import Link from "next/link";
import Head from "next/head";
function Login() {
	const router = useRouter();
	const handleLogin = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const userInfo = window.localStorage.getItem(data.get("email"));
		if (userInfo !== null) {
			router.push(`/home/${data.get("email")}`);
		} else {
			alert("User not found");
		}
	};

	return (
		<>
			<Head>
				<title>ITBANK - Login</title>
			</Head>
			<Link href="/" id="backButton">
				{"<"}
			</Link>
			<div className="loginPage">
				<h1>Iniciar Sesion</h1>
				<form onSubmit={(e) => handleLogin(e)} className="loginForm">
					<input
						type="email"
						placeholder="Email"
						name="email"
						autoComplete="on"
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						autoComplete="on"
					/>
					<button>Ingresar</button>
				</form>
			</div>
		</>
	);
}

export default Login;
