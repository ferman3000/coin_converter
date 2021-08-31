import {GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR} from '../ActionTypes';

//Ahora inicializo los estados
const init = {
    currencies:[],
    loading:false,
    error:false,  
    selectedCurrencyFullname:{},
    selectedCurrencySymbols:{},
    fullNameCoin:"",
    validateData:false,


}

const Reducer = (state = init, action) => {
    switch(action.type){
        
        case GET_CURRENCIES: 
        let newState = {
            ...state,
            loading:true
        }
        return newState;
        
        case GET_CURRENCIES_SUCCESS: 
        let newState1 = {
            ...state,
            loading:false,
            currencies: action.payload
        }
        return newState1;
        
        case GET_CURRENCIES_ERROR: 
        let newState2 = {
            ...state,
            loading:false,
            error:true
        }
        return newState2;
    
        default: return state;
    }




    
}

export default Reducer;
