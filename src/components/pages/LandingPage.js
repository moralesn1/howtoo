import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import GlobeImage from "../../assets/pictures/globe.png";
import LogoGlobe from "../../assets/pictures/Group829.png";

export default function LandingPage() {
	return (
		<div className="landingpage">
			<div className="landingpage-row">
				<div className="landingpage-col one">
					<h1>LOREM IPSUM</h1>
					<div className="colimage">
						<img src={LogoGlobe} alt="LogoGlobe" />
					</div>
					<div className="coltext">
						<i className="fas fa-hand-point-right"></i>
						<Link to="/home">Click begin to get started</Link>
					</div>
				</div>
				<div className="landingpage-col two">
					<div className="landingpage-image">
						<img src={GlobeImage} alt="Globe" />
					</div>
				</div>
			</div>
		</div>
	);
}
