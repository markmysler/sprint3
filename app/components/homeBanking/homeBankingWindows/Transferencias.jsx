import Head from "next/head";

function Transferencias({ user, users, updateBalance }) {
	function handleSubmit(e) {
		e.preventDefault();
		const { monto, destinatario, moneda } = e.target;
		if (
			monto.value &&
			destinatario.value &&
			moneda.value &&
			destinatario.value !== "none"
		) {
			user.balance = updateBalance(
				user.balance,
				moneda.value,
				monto.value
			);
			window.localStorage.removeItem(user.email);
			window.localStorage.setItem(user.email, JSON.stringify(user));
			alert("Transferencia enviada a " + destinatario.value);
			monto.value = "";
			destinatario.value = "none";
			return;
		} else {
			alert("Completar los datos solicitados");
		}
	}
	return (
		<>
			<Head>
				<title>ITBANK - Transferencias</title>
			</Head>
			<h1 id="transferenciasH1">Transferencias</h1>
			<form
				className="transferenciasForm"
				onSubmit={(e) => handleSubmit(e)}
			>
				<input type="number" placeholder="Monto" name="monto" />
				<select name="moneda" id="moneda">
					{user.balance.map((i) => {
						return (
							<option key={Object.keys(i)[0]}>
								{Object.keys(i)[0]}
							</option>
						);
					})}
				</select>
				<select name="destinatario" id="destinatario">
					<option value="none">Seleccionar destinatario</option>
					{users.map((u) => {
						return (
							<option key={u.username} value={u.name}>
								{u.name}
							</option>
						);
					})}
				</select>
				<button>Enviar</button>
			</form>
		</>
	);
}

export default Transferencias;
