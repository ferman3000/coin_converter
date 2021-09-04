import { takeLatest } from "@redux-saga/core/effects";
import { getCurrenciesSaga, getCoinConvertionSaga } from "./converterSaga";
import {GET_CURRENCIES, GET_CONVERTIONS} from '../ActionTypes';



export function * watcherSaga() {
    yield takeLatest(GET_CURRENCIES, getCurrenciesSaga);
    yield takeLatest(GET_CONVERTIONS,getCoinConvertionSaga);
}