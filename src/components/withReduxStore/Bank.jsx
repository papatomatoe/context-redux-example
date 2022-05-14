import React from "react";
import { useSelector } from "react-redux";
function Bank() {
	const { money } = useSelector((state) => state.money);
	return (
		<div className="App">
			<h3>Bank: {money}</h3>
		</div>
	);
}

export default Bank;
