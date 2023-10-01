import Head from "next/head";

function Transferencias({ user, users }) {
	function handleSubmit(e) {
		e.preventDefault();
		const { monto, destinatario } = e.target;
		if (
			monto.value &&
			destinatario.value &&
			destinatario.value !== "none"
		) {
			if (user.balance >= monto.value) {
				user.balance = user.balance - monto.value;
				window.localStorage.removeItem(user.email);
				window.localStorage.setItem(user.email, JSON.stringify(user));
				alert("Transferencia enviada a " + destinatario.value);
				monto.value = "";
				destinatario.value = "";
				return;
			} else {
				alert("Saldo insuficiente");
				return;
			}
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
