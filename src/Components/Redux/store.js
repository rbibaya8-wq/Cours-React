import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";
import loggerMiddleware from "./loggerMiddleware";
import { thunk } from "redux-thunk";

const store=createStore(rootReducer,applyMiddleware(loggerMiddleware,thunk))
export default store;