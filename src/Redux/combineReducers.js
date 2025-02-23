import { combineReducers } from "redux";
import LocationReduce from "./Reducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
    LiteLocatin:LocationReduce,
    Orders:OrderReducer,
});

export default rootReducer;