import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import About from "./components/homepage/About/About";
import Hero from "./components/homepage/Hero/Hero";
import SearchPage from "./components/search/SearchPage/SearchPage";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import EditAccommodationPage from "./components/admin/AdminPage/EditAccommodationPage/EditAccommodationPage";
import { SearchProvider } from "./global/contexts/SearchContext";
import { MenuContextProvider } from "./global/contexts/menuContext";
import { BookingContextProvider } from "./global/contexts/bookingContext";
import { AuthProvider } from "./global/contexts/AuthContext";
import MenuOverlay from "./components/ui/MenuOverlay/MenuOverlay";
import AccommodationPage from "./components/accommodations/AccommodationPage/AccommodationPage";
import ScrollToTop from "./global/functions/ScrollToTop";
import LoginPage from "./components/admin/LoginPage/LoginPage";
import AdminPage from "./components/admin/AdminPage/AdminPage";
import AddAccommodationPage from "./components/admin/AdminPage/AddAccommodationPage/AddAccommodationPage";

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
									<HelmetProvider>
										<Route exact path="/">
											<Helmet>
												<title>Holidaze | Home</title>
												<meta
													name="description"
													content="Holidaze is here to assist tourists to «Vestlandet» (Western Norway) in finding lodging that fits their budget and needs. If you are visiting Bergen and its vicinities, you can stay at one of the many wonderful hotels, apartments, cabins, and other accommodations supplied by our wonderful and dedicated community of accommodation owners."
												/>
											</Helmet>
											<Header filled={false} />
											<Hero />
											<About />
										</Route>
										<Route path="/search">
											<Helmet>
												<title>
													Holidaze | Accommodations
												</title>
											</Helmet>
											<Header filled={true} />
											<SearchPage />
											<About />
										</Route>
										<Route path="/accommodation/:id">
											<Header filled={true} />
											<BookingContextProvider>
												<AccommodationPage />
											</BookingContextProvider>
										</Route>
										<Route path="/admin">
											<Header filled={true} />
											<AdminPage />
										</Route>
										<Route path="/edit/:id">
											<Header filled={true} />
											<EditAccommodationPage />
										</Route>
										<Route path="/add">
											<Header filled={true} />
											<AddAccommodationPage />
										</Route>
										<Route path="/login">
											<Header filled={true} />
											<LoginPage />
										</Route>
									</HelmetProvider>
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
