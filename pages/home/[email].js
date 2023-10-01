import HomeBanking from "@/app/components/homeBanking/HomeBanking";
import RootLayout from "@/app/components/layout";

export async function getServerSideProps(context) {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	// If no data is returned
	if (!data) {
		return {
			notFound: true,
		};
	}
	const res2 = await fetch("https://open.er-api.com/v6/latest/USD");
	const data2 = await res2.json();

	// If no data is returned
	if (!data2) {
		return {
			notFound: true,
		};
	}

	// If data is returned
	return {
		props: { users: data, rates: data2 }, // Will be passed to the page component as props
	};
}

export default function HomePage(props) {
	return (
		<RootLayout>
			<HomeBanking users={props.users} rates={props.rates.rates} />
		</RootLayout>
	);
}
