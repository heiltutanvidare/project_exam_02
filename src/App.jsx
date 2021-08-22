import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/homepage/About/About";
import Hero from "./components/homepage/Hero/Hero";
import SearchPage from "./components/search/SearchPage/SearchPage";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import Container from "./components/layout/Container/Container";
import { SearchProvider } from "./global/contexts/SearchContext";
import { MenuContextProvider } from "./global/contexts/menuContext";
import MenuOverlay from "./components/ui/MenuOverlay/MenuOverlay";

function App() {
	return (
		<Router>
			<main>
				<MenuContextProvider>
					<MenuOverlay />
					<Header />
				</MenuContextProvider>
				<nav style={{ marginTop: "4rem" }}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Log in</Link>
						</li>
						<li>
							<Link to="/admin">Admin</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/admin">
						<Container>
							<p>This will be the admin page</p>
						</Container>
					</Route>
					<Route path="/login">
						<Container>
							<p>This will be the login page</p>
						</Container>
					</Route>
					<Route path="/">
						<SearchProvider>
							<Hero />
							<SearchPage />
						</SearchProvider>
						<About />
					</Route>
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
