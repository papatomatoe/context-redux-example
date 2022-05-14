import React from "react";
import Test from "./Test";

import { useDispatch } from "react-redux";

const Input = () => {
	const dispatch = useDispatch();
	const [value, setValue] = React.useState(0);

	const handler = () => {
		dispatch({ type: "addMoney", payload: Number(value) });
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
