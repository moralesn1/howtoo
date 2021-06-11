import React, { useState } from "react";

import "./Accordian.css";

export default function Accordian() {
	const [toggleQuestion, setToggleQuestion] = useState(null);

	const toggleAccord = (i) => {
		if (toggleQuestion === i) {
			return setToggleQuestion(null);
		}
		setToggleQuestion(i);
	};

	return (
		<div className="accordian-wrapper">
			<div className="accordian">
				{data.map((item, i) => (
					<div key={item.id} className="accordian-item">
						<div className="title" onClick={() => toggleAccord(i)}>
							<h3>
								{item.title}{" "}
								{toggleQuestion === i ? (
									<i className="fas fa-chevron-up"></i>
								) : (
									<i className="fas fa-chevron-down"></i>
								)}
							</h3>
						</div>
						<div className={toggleQuestion === i ? "content-show" : "content"}>
							<p>{item.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const data = [
	{
		id: 1,
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non, provident tempore obcaecati quae iste aliquam in, quo vel quod asperiores reiciendis harum, excepturi sit quam perspiciatis ipsum. Aspernatur, excepturi!",
	},
	{
		id: 2,
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non, provident tempore obcaecati quae iste aliquam in, quo vel quod asperiores reiciendis harum, excepturi sit quam perspiciatis ipsum. Aspernatur, excepturi!",
	},
	{
		id: 3,
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non, provident tempore obcaecati quae iste aliquam in, quo vel quod asperiores reiciendis harum, excepturi sit quam perspiciatis ipsum. Aspernatur, excepturi!",
	},
	{
		id: 4,
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non, provident tempore obcaecati quae iste aliquam in, quo vel quod asperiores reiciendis harum, excepturi sit quam perspiciatis ipsum. Aspernatur, excepturi!",
	},
	{
		id: 5,
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non, provident tempore obcaecati quae iste aliquam in, quo vel quod asperiores reiciendis harum, excepturi sit quam perspiciatis ipsum. Aspernatur, excepturi!",
	},
	{
		id: 6,
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non, provident tempore obcaecati quae iste aliquam in, quo vel quod asperiores reiciendis harum, excepturi sit quam perspiciatis ipsum. Aspernatur, excepturi!",
	},
	{
		id: 7,
		title: "Lorem Ipsum",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non, provident tempore obcaecati quae iste aliquam in, quo vel quod asperiores reiciendis harum, excepturi sit quam perspiciatis ipsum. Aspernatur, excepturi!",
	},
];
