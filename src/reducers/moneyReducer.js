const initialState = {
	money: 999,
};

export const moneyReducer = (state = initialState, action) => {
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
