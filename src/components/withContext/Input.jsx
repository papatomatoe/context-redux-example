import React from "react";
import Test from "./Test";

import { useMoney } from "../../context/money";

const Input = () => {
	const { addMoney } = useMoney();
	const [value, setValue] = React.useState(0);

	const handler = () => {
		addMoney(Number(value));
		setValue(0);
	};

	return (
		<>
			<input
				type="number"
				min="0"
				value={value}
				onChange={(evt) => setValue(evt.target.value)}
			/>
			<button onClick={handler}>Add</button>
			<Test />
		</>
	);
};

export default Input;
