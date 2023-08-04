import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import { ConnectWallet, Home, Root, Signup } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />
			<Route path="wallet" element={<ConnectWallet />} />
			<Route path="auth" element={<Signup />} />
		</Route>
	)
);

export default router;
