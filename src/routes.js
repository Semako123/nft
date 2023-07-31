import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import { Home, Root } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="home" element={<Home />} />
		</Route>
	)
);

export default router;
