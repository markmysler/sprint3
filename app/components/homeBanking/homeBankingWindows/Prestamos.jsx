import Head from "next/head";

function Prestamos({ user, setUser }) {
	function updateArray(arr, key, value) {
		// Find the object in the array that has the key
		let obj = arr.find((o) => o.hasOwnProperty(key));

		if (obj) {
			// If the object exists, add the value to the existing value
			obj[key] += Number(value);
		} else {
			// If the object does not exist, create a new object and add it to the array
			let newObj = {};
			newObj[key] = Number(value);
			arr.push(newObj);
		}

		return arr;
	}
	function handleSubmit(e) {
		e.preventDefault();
		const { monto, plazo } = e.target;
		if (
			confirm(
				`Solicitar un prestamo de $${monto.value} a ${plazo.value} meses?`
			)
		) {
			updateArray(user.balance, "ARS", monto.value);
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
