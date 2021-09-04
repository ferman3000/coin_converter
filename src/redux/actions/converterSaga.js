import { call, put, select } from "redux-saga/effects";
import {GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR,
        GET_CONVERTIONS_SUCCESS,GET_CONVERTIONS_ERROR} from '../ActionTypes';
import * as axios from 'axios';

export const getProject= (state) => state

let currencies = [];

const getCurrencies = async() =>{
    const url =  'https://api.coingecko.com/api/v3/coins/list';
    const result = await axios.get(url);
    currencies = result.data;
    return currencies;
}

export function* getCurrenciesSaga(action) {

    try {
        const currencies = yield call(getCurrencies);

        yield put({
            type: GET_CURRENCIES_SUCCESS,
            payload: currencies
        })
    } catch(error){
        yield put({
            type: GET_CURRENCIES_ERROR,
            payload:{
                title:"Lo sentimos hubo un error",
                debug: error
            }
        })
    }
}

export function* getCoinConvertionSaga(action) {

   let project =yield select(getProject);
   console.log("CoinState from Saga", project.coinState)
   const {amount, currency1, currency2, currency3}= project.coinState.objectValueSelection
   let result = yield call(axios.get,`https://api.coingecko.com/api/v3/simple/price?ids=${currency1}&vs_currencies=${currency2},${currency3}`)
   console.log ("resultado", result)
   try {
        yield put({
            type: GET_CONVERTIONS_SUCCESS,
            payload: result.data
        })
    } catch(error){
        yield put({
            type: GET_CONVERTIONS_ERROR,
            payload:{
                title:"Lo sentimos hubo un error",
                debug: error
            }
        })
    }

}
