import { combineReducers } from "redux";
import coinReducer from './converterReducer';

export default combineReducers({

    coinState: coinReducer

})