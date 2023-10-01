import Image from "next/image";
import "../sidebar/sideBar.css";

function MenuItem({ icon, title, onClick, disabled }) {
	return (
		<button
			type="button"
			className="item"
			onClick={() => onClick()}
			disabled={disabled}
		>
			<div className="a">
				<div className="icon">
					<Image
						src={icon.src}
						alt={`Icono de ${title}`}
						width={30}
						height={30}
						loading="lazy"
					/>
				</div>
				<div className="title">
					<span>{title}</span>
				</div>
			</div>
		</button>
	);
}

export default MenuItem;
