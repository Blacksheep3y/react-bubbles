import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload(false);
	};

	return (
		<Router>
			<div className="app-container">
				<div className="App">
					{localStorage.getItem("token") === null ? (
						<h2 className='myheading'>THE LOGIN FORM</h2>
					) : (
						<div className="protected-container">
							<button
								className="mylogout"
								color="inherit"
								onClick={logout}>
								logout
							</button>
						</div>
					)}
					<Switch>
						<PrivateRoute
							exact
							path="/bubbles"
							component={BubblePage}
						/>
						<Route path="/login" component={Login} />
						<Route component={Login} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;