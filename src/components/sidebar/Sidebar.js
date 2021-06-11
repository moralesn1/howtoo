import React from "react";
import { Link } from "react-router-dom";

import LogoGlobe from "./../../assets/pictures/Group829.png";
import "./SidebarPlain.css";

export default function Sidebar() {
	return (
		<div className="sidebar-container">
			<div className="sidebar-logo">
				<Link to="/home">
					<img src={LogoGlobe} alt="Logo" />
				</Link>
			</div>
			<div className="sidebar-content">
				<div className="sidebar-header">
					<h1>LOREM IPSUM</h1>
				</div>
				<div className="sidebar-text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
						eaque consectetur illo sed assumenda et aperiam praesentium culpa
						tempora neque esse non ipsam ipsum dolorem, voluptas, nostrum
						quibusdam exercitationem aliquam!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						voluptates ut necessitatibus optio doloribus sapiente accusamus
						beatae minima esse fuga, a laborum, quidem natus illum, ducimus
						explicabo magnam. Quae, quam?
					</p>
				</div>
			</div>
		</div>
	);
}
