import { combineReducers } from "redux";
import fetchAPI from "./fetchAPI";
import input from "./input";

export const rootReducers = combineReducers({fetchAPI, input})