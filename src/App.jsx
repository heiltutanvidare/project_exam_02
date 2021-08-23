import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/homepage/About/About";
import Hero from "./components/homepage/Hero/Hero";
import SearchPage from "./components/search/SearchPage/SearchPage";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import Container from "./components/layout/Container/Container";
import { SearchProvider } from "./global/contexts/SearchContext";
import { MenuContextProvider } from "./global/contexts/menuContext";
import MenuOverlay from "./components/ui/MenuOverlay/MenuOverlay";
import AccommodationPage from "./components/accommodations/AccommodationPage/AccommodationPage";
import ScrollToTop from "./global/functions/ScrollToTop";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<main>
				<MenuContextProvider>
					<MenuOverlay />
					<SearchProvider>
						<Switch>
							<Route exact path="/">
								<Header filled={false} />
								<Hero />
								<SearchPage />
								<About />
							</Route>
							<Route path="/accommodation/:id">
								<Header filled={true} />
								<AccommodationPage />
							</Route>
							<Route path="/admin">
								<Header filled={true} />
								<Container>
									<p>This will be the admin page</p>
								</Container>
							</Route>
							<Route path="/login">
								<Header filled={true} />
								<Container>
									<p>This will be the login page</p>
								</Container>
							</Route>
						</Switch>
					</SearchProvider>

					<Footer />
				</MenuContextProvider>
			</main>
		</Router>
	);
}

export default App;
