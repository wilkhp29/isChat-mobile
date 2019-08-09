import {all} from "redux-saga/effects";
import usuarioSaga from "./usuario";
import conversaSaga from "./conversa";


export default function* rootSaga(){
   yield all([
      usuarioSaga(),
      conversaSaga()
   ]);
}