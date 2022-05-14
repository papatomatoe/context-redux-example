import React from "react";
import { useMoney } from "../../context/money";
function Bank() {
	const { money } = useMoney();
	return (
		<div className="App">
			<h3>Bank: {money}</h3>
		</div>
	);
}

export default Bank;
