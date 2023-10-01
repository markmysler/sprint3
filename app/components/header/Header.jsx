import Image from "next/image";
import "./Header.css";
function Header() {
	return (
		<header>
			<Image
				src="https://i.ibb.co/mvKjwch/logo-Banco.png"
				alt="Logo banco"
				width={120}
				height={35}
				loading="lazy"
			/>
		</header>
	);
}

export default Header;
