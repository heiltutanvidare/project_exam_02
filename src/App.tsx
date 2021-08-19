import About from "./components/homepage/About";
import Hero from "./components/homepage/Hero";
import SearchBox from "./components/search/SearchBox";
import SearchResults from "./components/search/SearchResults";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
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
