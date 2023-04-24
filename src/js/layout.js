import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import FavCharacter  from "./views/favCharacter";
import { Single } from "./views/single";
import  CardInfoPlanets  from "./views/infoPlanets";
import CardInfoVehicles from "./views/infoVehicles";
import CardInfo from "./views/infoCharacter";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favCharacter" element={<FavCharacter />} />
						<Route path="/infoVehicles/:id" element={<CardInfoVehicles />} />
						<Route path="/infoPlanets/:id" element={<CardInfoPlanets />} />
						<Route path="/infoCharacter/:id" element={<CardInfo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1> The force ain't with u</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
