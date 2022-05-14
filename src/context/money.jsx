import React, { createContext } from "react";

const initialState = {
	money: null,
	addOne: null,
	removeOne: null,
	addMoney: null,
};

const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
	const [money, setMoney] = React.useState(200);

	const addOne = () => setMoney((prev) => prev + 1);

	const removeOne = () => setMoney((prev) => prev - 1);

	const addMoney = (value) => setMoney((prev) => prev + value);

	return (
		<Context.Provider value={{ money, addOne, removeOne, addMoney }}>
			{children}
		</Context.Provider>
	);
};

export const useMoney = () => React.useContext(Context);
