import Head from "next/head";
import { useEffect, useState } from "react";

function Convertidor({ user, rates }) {
	const [userInput, setUserInput] = useState(1);
	const [added, setAdded] = useState(false);
	function getCurrencies() {
		const ratesArr = [];
		for (const key in rates) {
			ratesArr.push(key);
		}
		return ratesArr;
	}
	function updateArray(arr, key, value) {
		// Find the object in the array that has the key
		let obj = arr.find((o) => o.hasOwnProperty(key));

		if (obj) {
			// If the object exists, add the value to the existing value
			obj[key] += value;
		} else {
			// If the object does not exist, create a new object and add it to the array
			let newObj = {};
			newObj[key] = value;
			arr.push(newObj);
		}

		return arr;
	}
	function checkBalance(arr, key, value) {
		// Find the object in the array that has the key
		let obj = arr.find((o) => o.hasOwnProperty(key));

		if (obj && obj[key] > value) {
			return true;
		} else {
			return false;
		}
	}
	function handleConversion(e) {
		e.preventDefault();
		const { monto, balanceOptions, opcionesConversion } = e.target;

		if (monto.value && balanceOptions.value && opcionesConversion.value) {
			if (checkBalance(user.balance, balanceOptions.value, monto.value)) {
				if (
					confirm(
						`Convertir ${monto.value} ${balanceOptions.value} a ${opcionesConversion.value}?`
					)
				) {
					user.balance.map((i) => {
						if (balanceOptions.value in i) {
							i[balanceOptions.value] -= monto.value;
						}
					});
					updateArray(
						user.balance,
						opcionesConversion.value,
						Number(
							(
								(monto.value / rates[balanceOptions.value]) *
								rates[opcionesConversion.value]
							).toFixed(2)
						)
					);
					window.localStorage.removeItem(user.email);
					window.localStorage.setItem(
						user.email,
						JSON.stringify(user)
					);
					alert("Transaccion exitosa");
					monto.value = "";
				}
			} else {
				alert("Saldo insuficiente");
			}
		} else {
			alert("Completar todos los campos");
		}
	}

	return (
		<div className="cotizacionesPage">
			<Head>
				<title>ITBANK - Conversion</title>
			</Head>
			<h1>Conversion</h1>
			<form
				onSubmit={(e) => handleConversion(e)}
				className="cotizacionesForm"
			>
				<input
					type="number"
					placeholder="Monto"
					onChange={(e) => setUserInput(e.target.value)}
					className="conversionInput"
					name="monto"
				/>
				<div className="convertidorOptions">
					<select name="balanceOptions" id="balanceOptions">
						{user.balance.map((currency) => {
							return (
								<option key={Object.keys(currency)}>
									{Object.keys(currency)}
								</option>
							);
						})}
					</select>
					<p> a </p>
					<select name="opcionesConversion" id="opcionesConversion">
						{getCurrencies().map((c) => {
							return <option key={c}>{c}</option>;
						})}
					</select>
					<button>Convertir</button>
				</div>
			</form>
		</div>
	);
}

export default Convertidor;
