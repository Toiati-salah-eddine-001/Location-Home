import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import LocationReduce from "./Reducer";
import rootReducer from "./combineReducers";


const store = createStore(rootReducer, composeWithDevTools());
export default store;