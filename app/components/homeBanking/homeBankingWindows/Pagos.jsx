import Head from "next/head";

function Pagos({ user }) {
	function handleSubmit(e) {
		e.preventDefault();
		const { monto, beneficiario } = e.target;
		console.log(monto.value, beneficiario.value);
		if (user.balance >= monto.value) {
			user.balance = user.balance - monto.value;
			window.localStorage.removeItem(user.email);
			window.localStorage.setItem(user.email, JSON.stringify(user));
			alert("Pagaste " + monto.value + " a " + beneficiario.value);
			monto.value = "";
			beneficiario.value = "";
			return;
		} else {
			alert("Saldo insuficiente");
			return;
		}
	}
	return (
		<>
			<Head>
				<title>ITBANK - Pagos</title>
			</Head>
			<h1 id="pagosH1">Pago de facturas</h1>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}
				className="pagosForm"
			>
				<input
					type="text"
					placeholder="Beneficiario"
					name="beneficiario"
				/>
				<input type="number" placeholder="Monto" name="monto" />
				<button type="submit">Enviar</button>
			</form>
		</>
	);
}

export default Pagos;
