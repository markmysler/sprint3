import Head from "next/head";
import "./homeBankingWindows.css";
import Image from "next/image";

function Cuentas({ user }) {
	console.log(user);
	return (
		<div className="cuentaPage">
			<Head>
				<title>ITBANK - Cuentas</title>
			</Head>
			<h1>Tu Cuenta</h1>
			{user ? (
				<div className="cuentaImgDiv">
					<Image
						src="https://i.ibb.co/ryWjGJ1/logo.png"
						alt="Foto de perfil"
						width={120}
						height={120}
						loading="lazy"
						className="cuentaImg"
					/>
				</div>
			) : (
				""
			)}
			{user ? (
				<h3>
					Bienvenido/a {user.name} {user.lastName}
				</h3>
			) : (
				""
			)}
			{user ? <h4>{user.email}</h4> : ""}
			{user ? (
				<>
					<h4 className="balanceTitulo">Balance de la cuenta:</h4>
					{user.balance.map((i) => {
						return (
							<p key={Object.keys(i)[0]} className="userCurrency">
								{Object.keys(i)[0]}: {i[Object.keys(i)[0]]}
							</p>
						);
					})}
				</>
			) : (
				""
			)}
		</div>
	);
}

export default Cuentas;
