import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Home />} />
		</Route>
	)
);

export default router;
