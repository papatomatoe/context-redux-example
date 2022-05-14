import React from "react";
import Bank from "./components/withReduxStore/Bank";
import Controls from "./components/withReduxStore/Controls";
import ContextBank from "./components/withContext/Bank";
import ContextControls from "./components/withContext/Controls";

function App() {
	return (
		<main className="main">
			<section>
				<h2>Redux</h2>
				<Bank />
				<Controls />
			</section>
			<section>
				<h2>Context</h2>
				<ContextBank />
				<ContextControls />
			</section>
		</main>
	);
}

export default App;
