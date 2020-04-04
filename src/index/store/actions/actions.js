import {ADD_DATA ,REMOVE_DATA ,UPDATE_DATA}from'./types'

export function updateDataFromAction(data){

    return {
        type:UPDATE_DATA ,
        data
    }
}

export function updateData(data){
    return(dispatch)=>{
        dispatch(updateDataFromAction(data))
    }

}

export function RemoveDataFromAction(data){

    return {
        type:REMOVE_DATA ,
        data
    }
}

export function removeData(data){
    return(dispatch)=>{
        dispatch(RemoveDataFromAction(data))
    }
}

export function ADDataFromAction(data){

    return {
        type:ADD_DATA ,
        data
    }
}

export function addData(data){
    return(dispatch)=>{
        dispatch( ADDataFromAction(data))
    }

    


}