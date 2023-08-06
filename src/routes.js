import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import {
	ConnectWallet,
	Home,
	Ranking,
	Root,
	Signup,
	Marketplace,
	NftMarket,
	CollectionsMarket,
	ExhibitionPage,
} from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />
			<Route path="wallet" element={<ConnectWallet />} />
			<Route path="auth" element={<Signup />} />
			<Route path="ranking" element={<Ranking />} />
			<Route path="marketplace" element={<Marketplace />}>
				<Route index element={<NftMarket />} />
				<Route path="nft" element={<NftMarket />} />
				<Route path="collections" element={<CollectionsMarket />} />
			</Route>
			<Route path="/exhibition" element={<ExhibitionPage />} />
		</Route>
	)
);

export default router;
