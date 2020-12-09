import * as Actions from "../constants/index"

export function initCity(data){
    return{
        type: Actions.DATA,
        data
    }
}
