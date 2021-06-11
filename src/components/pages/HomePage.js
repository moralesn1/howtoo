import React from "react";

import "./HomePage.css";
import HomePageImage from "./../../assets/pictures/homepage-image.jpeg";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

export default function HomePage() {
	return (
		<div className="homepage">
			<Sidebar />
			<div className="container">
				<img src={HomePageImage} alt="stock" />
			</div>
			<Footer />
		</div>
	);
}
