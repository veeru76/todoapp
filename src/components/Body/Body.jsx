// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "../Sidebar";
import MainContainer from "../MainContainer";
import "../sidebar.css";

// eslint-disable-next-line react/prop-types
const Body = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2 bg-dark border">
					<Sidebar />	
				</div>
			</div>
		</div>
	);
};

export default Body;
