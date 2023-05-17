// eslint-disable-next-line no-unused-vars
import React from "react";
//import { Container, Row } from "react-bootstrap";
import "../components/sidebar.css";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { BiHomeAlt2 }  from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import {HiOutlineBell} from "react-icons/hi"

const Sidebar = () => {
	const isMenuopen = useSelector((store) => store.app.isMenuOpen);
	if(!isMenuopen) return null;
	return (
		<div className="container">
			<div className="row">
				<div className="col-auto min-vh-100 p-2">
					<div className="container">
					<BiHomeAlt2 color="grey" fill="grey" size={18}/>
					<button className="btn text-light p-1">Home</button>
					</div>
					<div className="container">
					<BsCheckCircle color="grey" fill="grey" size={18}/>
					<button className="btn text-light p-1">My Tasks</button>
					</div>
					<div className="container">
					<HiOutlineBell color="grey" fill="grey" size={18}/>
					<button className="btn text-light p-1">Inbox</button>
					</div>
					{/* <ul className="list-group btn text text-primary">
						<li className="list-group item p-1">My Tasks</li>
						<li className="list-group item p-1">Events</li>
						<li className="list-group item p-1">Assignments</li>
						<li className="list-group item p-1">Papers</li>
					</ul> */}
					{/* <h6 className="text text-primary font-size:8 p-1">My Tasks</h6>
					<h6 className="text text-primary font-size:8 p-1">Events</h6>
					<h6 className="text text-primary font-size:8 p-1">Assignments</h6>
					<h6 className="text text-primary font-size:8 p-1">Papers</h6> */}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
