
const initialestate =[];
const LocationReduce = (state=initialestate,action)=>{
    switch(action.type){
        case 'SET_LOCATION':
            return action.payload;
        default:
            return state;
    }
}
export default LocationReduce;