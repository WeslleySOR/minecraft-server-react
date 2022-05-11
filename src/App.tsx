import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
	return (
		<BrowserRouter>
			<Flex color="whiteAlpha.900" flexDir="column" h="100vh" backgroundImage="https://images7.alphacoders.com/556/thumb-1920-556718.jpg">
				<Header />
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</Flex>
		</BrowserRouter>
	);
}
