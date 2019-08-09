import {createStore,applyMiddleware} from "redux";
import createSagaMiddlawere from "redux-saga";
//importando reducers
import redurcer from "./redurcers";
//importando sagas
import sagas from "./sagas";
const sagaMiddlaware = createSagaMiddlawere();

const store = createStore(redurcer,applyMiddleware(sagaMiddlaware))

sagaMiddlaware.run(sagas);

export default store;