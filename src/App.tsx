import { useState } from "react";

import { SearchInput } from "./components/SearchInput";
import "./App.css";

function App() {
	const [search, setSearch] = useState();

	const options = [
		{ text: "ReactJS", value: "ReactJS" },
		{ text: "React Native", value: "React Native" },
		{ text: "Node.js", value: "Node.js" },
		{ text: "Express.js", value: "Express.js" },
		{ text: "Angular", value: "Angular" },
		{ text: "Flutter", value: "Flutter" },
		{ text: "Vue", value: "Vue" },
		{ text: "Javascript", value: "Javascript" },
	];

	function handleOptionSelected(option) {
		setSearch(option.text);
	}

	return (
		<div className="App">
			<SearchInput
				placeholder="Comece a digitar a sua pesquisa"
				options={options}
				onOptionSelected={handleOptionSelected}
				onChange={(e) => setSearch(e.target.value)}
				value={search || ""}
			/>
		</div>
	);
}

export default App;
