import { createStore } from "redux";
import rootred from "./Redux/Reducers";


const store = createStore(
    rootred
);


export default store;