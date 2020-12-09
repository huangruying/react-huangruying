import { createStore } from "redux"
import rootReducers from "../reducers/index"

export default function configureStore(){
    const store = createStore(rootReducers);
    return store;
}
