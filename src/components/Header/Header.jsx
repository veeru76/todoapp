// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ham from "../../../src/hamburger.png";
import home from "../../../src/asana.svg";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
// eslint-disable-next-line react/prop-types
const Header = () => {
	const dispatch = useDispatch();
	const ToggleHandler = () => {
		dispatch(toggleMenu())
	}
	return (
		<Navbar bg="dark">
			<Container fluid>
				<Navbar.Brand>
					<img
						alt="hamb"
						src={ham}
						width="30"
						height="30"
						className="d-inline-block align-top me-3"
						onClick={() =>ToggleHandler()}
					/>
					<a href="/">
					<Image
						alt=""
						src={home}
						width="90"
						height="30"
						className="d-inline-block align-top"
					/>
					</a>
					{" "}
				</Navbar.Brand>
				<div>
					<input
						type="text"
						placeholder="search"
						size="50"
						className="bg-dark rounded"
					/>
				</div>

				<div>
					<Image
						src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
						alt="user"
						width="30"
						height="30"
					/>
				</div>
			</Container>
		</Navbar>
	);
};

export default Header;
