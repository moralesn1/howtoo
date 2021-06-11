import React, { useState } from "react";

import "./HomeTopic.css";

import Footer from "./../../footer/Footer";
import SidebarPlain from "./../../sidebar/SidebarPlain";
import Accordian from "./../../accordian/Accordian";

import BackgroundImage from "./../../../assets/pictures/home1-bg.png";

export default function HomeTopic() {
	const [toggleAccordian, setToggleAccordian] = useState(false);
	return (
		<div className="homepage">
			<SidebarPlain toggleAccordian={(toggle) => setToggleAccordian(toggle)} />
			{toggleAccordian ? <Accordian /> : null}
			<div className="container">
				<img src={BackgroundImage} alt="stock" />
			</div>
			<Footer />
		</div>
	);
}
