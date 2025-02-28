const initialestate = [];

const LocationReduce = (state = initialestate, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload;
    case 'SET_DATA_SEARCHED':
      return state.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
    default:
      return state;
  }
};

export default LocationReduce;