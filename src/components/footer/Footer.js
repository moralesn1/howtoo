import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer-links">
			<div className="home-link">
				<i className="fas fa-home"></i>
				<Link to="/hometopic">Home</Link>
			</div>
			<div className="topic-links">
				<Link className="topic" to="/topic1">
					Topic 1
				</Link>
				<Link className="topic" to="/topic2">
					Topic 2
				</Link>
				<Link className="topic" to="/topic3">
					Topic 3
				</Link>
				<Link className="topic" to="/topic4">
					Topic 4
				</Link>
				<Link className="topic" to="/topic5">
					Topic 5
				</Link>
			</div>
		</div>
	);
}
