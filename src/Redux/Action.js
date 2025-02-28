export const AddData=(data)=>{
    return {
        type:'SET_LOCATION',
        payload: data
    }
}
export const AddDataOrder=(data)=>{
    return {
        type:'SET_Orders',
        payload: data
    }
}
export const Searching=(data)=>{
    return {
        type:'SET_DATA_SEARCHED',
        payload: data
    }
}