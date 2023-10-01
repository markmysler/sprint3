import React, { useEffect, useState } from "react";
import "./sideBar.css";
import logo from "../../assets/logo.png";
import punto from "../../assets/punto.png";

import { useRouter } from "next/router";
import MenuItem from "../menuItem/MenuItem";
import Image from "next/image";

const Sidebar = ({ page, setPage, user }) => {
	const [collapsed, setCollapsed] = useState(true);
	const router = useRouter();
	const switchView = (view) => {
		setPage(view);
		toggleMenu();
	};
	const toggleMenu = () => {
		setCollapsed(!collapsed);
	};

	function handleLogOut() {
		router.push("/");
	}

	return (
		<div
			id="sidemenu"
			className={collapsed ? "menu-collapsed" : "menu-expanded"}
		>
			{/* Encabezado */}
			<div id="header">
				<div id="menu-btn" onClick={toggleMenu}>
					<div className="btn-hamburger"></div>
					<div className="btn-hamburger"></div>
					<div className="btn-hamburger"></div>
				</div>
			</div>

			{/* Perfil */}
			<div id="profile">
				<div id="photo">
					<Image
						src={logo.src}
						alt="Foto de perfil"
						width={100}
						height={100}
						loading="lazy"
					/>
				</div>
				<div id="sideMenuName">
					{user
						? user.name + " " + user.lastName
						: "Iniciar sesión para navegar"}
				</div>
				<div id="saldoSideBar">
					{user
						? user.balance.map((i) => {
								return (
									<p
										key={i[Object.keys(i)[0]]}
										className="userCurrency"
									>
										{i[Object.keys(i)[0]].toLocaleString(
											"de-DE"
										)}{" "}
										{Object.keys(i)[0]}
									</p>
								);
						  })
						: ""}
				</div>
			</div>

			{/* Elementos del menú */}
			<div id="menu-items">
				<MenuItem
					icon={punto}
					title="Cuentas"
					onClick={() => switchView("cuentas")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Transferencias"
					onClick={() => switchView("transferencias")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Pagos"
					onClick={() => switchView("pagos")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Cálculo de préstamos"
					onClick={() => switchView("prestamos")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Convertidor de moneda"
					onClick={() => switchView("convertidor")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Contacto"
					onClick={() => switchView("contacto")}
					disabled={false}
				/>

				<div className="item-separator"></div>
				<MenuItem
					icon={punto}
					title="Cerrar sesión"
					onClick={() => handleLogOut()}
					disabled={false}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
