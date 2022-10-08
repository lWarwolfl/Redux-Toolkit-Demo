import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import UserView from "./features/user/UserView";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";

function App() {
	useEffect(() => {
		const testStore = async () => {};
		testStore();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<CakeView />
				<IcecreamView />
				<UserView />
			</header>
		</div>
	);
}

export default App;
