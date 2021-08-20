import About from "./components/homepage/About/About";
import Hero from "./components/homepage/Hero/Hero";
import SearchBox from "./components/search/SearchBox/SearchBox";
import SearchResults from "./components/search/SearchResults/SearchResults";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { SearchProvider } from "./global/contexts/SearchContext";

function App() {
	return (
		<main>
			<Header />
			<Hero />
			<SearchProvider>
				<SearchBox />
				<SearchResults />
			</SearchProvider>
			<About />
			<Footer />
		</main>
	);
}

export default App;
