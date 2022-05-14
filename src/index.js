import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/money";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ContextProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</ContextProvider>
);
