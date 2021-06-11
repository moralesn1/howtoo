import React from "react";
import { Link } from "react-router-dom";

import LogoGlobe from "./../../assets/pictures/Group829.png";
import "./Sidebar.css";

export default function Sidebar(props) {
	return (
		<div className="sidebar-container-plain">
			<div className="sidebar-logo-plain">
				<Link to="/home">
					<img src={LogoGlobe} alt="Logo" />
				</Link>
			</div>
			<div className="sidebar-content-plain">
				<div className="sidebar-header-plain">
					<h1>LOREM IPSUM DOLOR SIT</h1>
				</div>
				<div
					className="sidebar-plain-button"
					onClick={() => props.toggleAccordian(true)}
				>
					<h3>Begin</h3>
				</div>
			</div>
		</div>
	);
}
