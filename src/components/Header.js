import React from "react";
import "../styles/Header.css";
import { HeaderImages } from "./ImageLinks";

const Header = () => {
	return (
		<>
			<div className="header_container">
				{HeaderImages.map((data, idx) => (
					<img src={data.img_src} key={idx} alt="Header Images" />
				))}
			</div>
		</>
	);
};

export default Header;
