import About from "./components/homepage/About/About";
import Hero from "./components/homepage/Hero/Hero";
import SearchPage from "./components/search/SearchPage/SearchPage";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { SearchProvider } from "./global/contexts/SearchContext";

function App() {
	return (
		<main>
			<Header />
			<SearchProvider>
				<Hero />
				<SearchPage />
			</SearchProvider>
			<About />
			<Footer />
		</main>
	);
}

export default App;
