import { GET_ERROR, CLEAR_ERROR } from "../constants";


export const returnError = (payload)=>async dispatch=>{
dispatch({
    type : GET_ERROR,
    payload,
})
}


export const clearError = ()=>async dispatch =>{
    dispatch ({
        type : CLEAR_ERROR
    })
}
