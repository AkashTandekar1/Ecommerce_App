import {combineReducers} from "redux";
import { CartReducer } from "./Reducer";


const rootred = combineReducers({
    cart:CartReducer
});


export default rootred
