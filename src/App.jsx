import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/homepage/About/About";
import Hero from "./components/homepage/Hero/Hero";
import SearchPage from "./components/search/SearchPage/SearchPage";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import EditAccommodationPage from "./components/admin/AdminPage/EditAccommodationPage/EditAccommodationPage";
import { SearchProvider } from "./global/contexts/SearchContext";
import { MenuContextProvider } from "./global/contexts/menuContext";
import { AuthProvider } from "./global/contexts/AuthContext";
import MenuOverlay from "./components/ui/MenuOverlay/MenuOverlay";
import AccommodationPage from "./components/accommodations/AccommodationPage/AccommodationPage";
import ScrollToTop from "./global/functions/ScrollToTop";
import LoginPage from "./components/admin/LoginPage/LoginPage";
import AdminPage from "./components/admin/AdminPage/AdminPage";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<AuthProvider>
				<MenuContextProvider>
					<SearchProvider>
						<div className="layout__wrapper">
							<div>
								<MenuOverlay />
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
										<AdminPage />
									</Route>
									<Route path="/edit/:id">
										<Header filled={true} />
										<EditAccommodationPage />
									</Route>
									<Route path="/login">
										<Header filled={true} />
										<LoginPage />
									</Route>
								</Switch>
							</div>
						</div>
						<Footer />
					</SearchProvider>
				</MenuContextProvider>
			</AuthProvider>
		</Router>
	);
}

export default App;
