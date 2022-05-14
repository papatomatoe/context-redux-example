import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/money";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
	money: 999,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "addOne":
			return { ...state, money: state.money + 1 };
		case "removeOne":
			return { ...state, money: state.money - 1 };
		case "addMoney":
			return { ...state, money: state.money + action.payload };
		default:
			return state;
	}
};

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ContextProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</ContextProvider>
);
