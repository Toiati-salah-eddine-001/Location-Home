
const initialestate =[];
const OrderReducer = (state=initialestate,action)=>{
    switch(action.type){
        case 'SET_Orders':
            return action.payload;
        default:
            return state;
    }
}
export default OrderReducer;