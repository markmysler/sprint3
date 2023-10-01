import Head from "next/head";

function Contacto() {
	function handleSubmit(e) {
		e.preventDefault();
		const { consulta } = e.target;
		if (consulta.value) {
			alert("Consulta enviada, responderemos a la brevedad");
			consulta.value = "";
		} else {
			alert("No es posible enviar un formulario vacio");
		}
	}
	return (
		<div className="contactoPage">
			<Head>
				<title>ITBANK - Contacto</title>
			</Head>
			<h1>Contacto</h1>
			<form onSubmit={(e) => handleSubmit(e)} className="contactoForm">
				<textarea
					type="text"
					name="consulta"
					placeholder="Escriba su consulta..."
				/>
				<button className="contactoButton">Enviar</button>
			</form>
		</div>
	);
}

export default Contacto;
