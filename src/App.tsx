import About from "./components/homepage/About";
import Hero from "./components/homepage/Hero";
import SearchResults from "./components/search/SearchResults";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

function App() {
	return (
		<main>
			<Header />
			<Hero />
			<SearchResults />
			<About />
			<Footer />
		</main>
	);
}

export default App;
