import { call, put } from "redux-saga/effects";
import {GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR} from '../ActionTypes';
import axios from 'axios';


const fullNameCoin = [
        "bitcoin",
        "ethereum",
        "litecoin",
        "binance",
        "dollar",
]
let currencies = [];

/*const getCurrencies =() =>{
    //AQUI OBTENGO EL VALOR DEL SERVICIO
    return currencies;
}*/

const getCoinFullName=() =>{
    //AQUI OBTENGO EL VALOR DEL SERVICIO
    return fullNameCoin;
}

const getCurrencies = async() =>{
    //AQUI OBTENGO EL VALOR DEL SERVICIO
    const url =  'https://api.coingecko.com/api/v3/coins/list?include_platform=<boolean>';
    const result = await axios.get(url);
    console.log(result.data);
    currencies = result.data;
    return currencies;
}

export function* getCurrenciesSaga(action) {

    try {
        const currencies = yield call(getCurrencies);

        console.log('estoy en currencies')
        yield put({
            type: GET_CURRENCIES_SUCCESS,
            payload: currencies
        })
    } catch(error){
        yield put({
            type: GET_CURRENCIES_ERROR,
            payload:{
                title:"Querido usuario, lo sentimos hubo un error",
                debug: error
            }
        })
    }
}
