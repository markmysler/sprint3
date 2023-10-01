import Head from "next/head";

function Prestamos({ user, setUser }) {
	function handleSubmit(e) {
		e.preventDefault();
		const { monto, plazo } = e.target;
		if (
			confirm(
				`Solicitar un prestamo de $${monto.value} a ${plazo.value} meses?`
			)
		) {
			user.balance += Number(monto.value);
			window.localStorage.removeItem(user.email);
			window.localStorage.setItem(user.email, JSON.stringify(user));
			monto.value = "";
			plazo.value = "";
			alert("Prestamo concedido");
		}
	}
	return (
		<>
			<Head>
				<title>ITBANK - Prestamos</title>
			</Head>
			<h1 id="prestamoH1">Solicitar prestamo</h1>
			<form onSubmit={(e) => handleSubmit(e)} className="prestamoForm">
				<input type="number" placeholder="Monto (AR$)" name="monto" />
				<input type="number" placeholder="Plazo (meses)" name="plazo" />
				<button>Solicitar</button>
			</form>
		</>
	);
}

export default Prestamos;
