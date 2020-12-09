import * as Actions from "../constants/index"

const initState = {};
export default function data(state = initState,action){
    switch(action.type){
        case Actions.DATA:
            return state = action.data;
        default:
            return state;
    }
}