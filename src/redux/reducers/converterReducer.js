import {GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR,
        GET_CONVERTIONS,GET_CONVERTIONS_SUCCESS,GET_CONVERTIONS_ERROR} from '../ActionTypes';


const init = {
    currencies:[],
    loading:false,
    error:false,
    errorMessage:{},  
    objectValueSelection:{ },
    objectFactorConvertion: { },
    objectResultConvertion: { },

}


const Reducer = (state = init, action) => {

    const calculateConvertion = (state,action) =>{
        let newStateConvertionSuccess = {
            ...state,
            loading:false,
            objectFactorConvertion: action.payload
        }
        console.log("Este", newStateConvertionSuccess)
        const {amount, currency1, currency2, currency3}= newStateConvertionSuccess.objectValueSelection
        //const {} = newStateConvertionSuccess.objectFactorConvertion
        const resultConvertionObject = newStateConvertionSuccess.objectFactorConvertion[currency1]
        const resultConvertionObjectOne = resultConvertionObject[currency2]
        const resultConvertionObjectTwo = resultConvertionObject[currency3]
        if (resultConvertionObjectOne && resultConvertionObjectTwo){
            const resultOne = amount * resultConvertionObjectOne
            const resultTwo = amount * resultConvertionObjectTwo
            const provisionalResultObject = {
                resultOne: resultOne.toString(),
                resultTwo: resultTwo.toString()
            }
            newStateConvertionSuccess.objectResultConvertion= provisionalResultObject
        }
        if (resultConvertionObjectOne===undefined){
            const resultTwo = amount * resultConvertionObjectTwo
            const provisionalResultObject = {
                resultOne: 'Error Resultado no encontrado',
                resultTwo: resultTwo.toString()
            }
            newStateConvertionSuccess.objectResultConvertion= provisionalResultObject
        }
        if (resultConvertionObjectTwo===undefined){
            const resultOne = amount * resultConvertionObjectOne
            const provisionalResultObject = {
                resultOne: resultOne.toString(),
                resultTwo: 'Error Resultado no encontrado'
            }
            newStateConvertionSuccess.objectResultConvertion= provisionalResultObject
        }




        return newStateConvertionSuccess;
    }

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
            error:true,
            errorMessage: action.payload
        }
        return newState2;

        case GET_CONVERTIONS: 
        let newStateConvertion = {
            ...state,
            loading:true,
            objectValueSelection: action.payload
        }
        return newStateConvertion;

        case GET_CONVERTIONS_SUCCESS: 
            return calculateConvertion(state,action);

        case GET_CONVERTIONS_ERROR: 
        let newStateConvertionError = {
            ...state,
            loading:false,
            error:true,
            errorMessage: action.payload
        }
        return newStateConvertionError;
    
        default: return state;
    }
    
}

export default Reducer;
