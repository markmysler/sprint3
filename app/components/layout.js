import "../globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { RecoilRoot } from "recoil";

export default function RootLayout({ children }) {
	return (
		<RecoilRoot>
			<Header />
			{children}
			<Footer />
		</RecoilRoot>
	);
}
