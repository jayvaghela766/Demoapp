import {
  LOADER,
  STORE_TOKEN,
  USER_DATA,
  
} from '../constants';

const initialState = {
  loading: false,
  token: '',
  userData: {},
 
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        loading: action.payload,
      };
  
    case STORE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    
    default:
      return { ...state };
  }
};

export default commonReducer;
