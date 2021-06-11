import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import HomeTopic from "./components/pages/topics/HomeTopic";
import Topic1Page from "./components/pages/Topic1Page";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route exact path="/home">
						<HomePage />
					</Route>
					<Route exact path="/hometopic">
						<HomeTopic />
					</Route>
					<Route exact path="/topic1">
						<Topic1Page />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
