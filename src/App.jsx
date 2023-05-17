import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
// import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
	
	return (

		<Provider store={store}>
			<div>
				<Header/>
				<Body />
			</div>

		</Provider>
	);
}


export default App;
