import { takeLatest } from "@redux-saga/core/effects";
import { getCurrenciesSaga } from "./converterSaga";
import {GET_CURRENCIES} from '../ActionTypes';

export function * watcherSaga() {
    yield takeLatest(GET_CURRENCIES, getCurrenciesSaga);
}