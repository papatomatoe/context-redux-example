import { combineReducers } from "redux";
import { moneyReducer } from "./moneyReducer";

export const reducer = combineReducers({ money: moneyReducer });
