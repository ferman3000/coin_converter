import React from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import { watcherSaga } from './actions';

const sagaMiddleWare = createSagaMiddleware(); 
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers,compose(applyMiddleware(sagaMiddleWare), reduxDevTools));

sagaMiddleWare.run(watcherSaga);

const ReduxWrap = (props) => {
    return (
        <ReduxProvider store={store}> 
            { }
            {props.children}
        </ReduxProvider>
    )
}

export default ReduxWrap;