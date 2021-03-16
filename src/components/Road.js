import React from "react";
import "../styles/Highlights.css";
import { RoadImages } from "./ImageLinks";

const Road = () => {
	return (
		<>
			<div className="Highlights_container">
				<p className="highlight">Highlights</p>
				<div className="cards">
					{RoadImages.map((data, idx) => (
						<div className="card" key={idx}>
							<img
								className="card_images"
								src={data.img_src}
								alt="BMX Images"
							/>
							<div className="card_info">
								<p className="text">{data.text}</p>
								<div className="labels">
									<p className="label1">{data.label1}</p>
									<p className="label2">{data.label2}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Road;
