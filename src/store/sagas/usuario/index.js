import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest , call , select,put } from "redux-saga/effects";
import axios from "../../../config/axios";
import {Logou,SET_USERS} from "../../actions/usuario";


function* login({navegation}){
      const usuario = yield select(state => state.usuarios.dadosUser);
      try {
        const {data:resposta} = yield call(logando,usuario);
       
        yield AsyncStorage.setItem("token",resposta.token);
        const {user} = resposta;
        const imgUrl =`${user.imgUrl}`;
        
        user.imgUrl = imgUrl;        
        yield AsyncStorage.setItem("user",JSON.stringify(user));
        yield put(Logou(user));
        navegation.navigate("Home");
          
      } catch (error) {
          console.log(error);
          
      }
}

function logando(usuario){
    const {email,password} = usuario;
    return axios.post("login",{email,password});
}

function getallUsers(){
    return axios.get("usuarios");
}


function* cadastrando(){
    
}

function* pegarUsuarios({navegation}){
    
    try{
        const {data:usuarios} = yield call(getallUsers);
        yield put(SET_USERS(usuarios));
        
    }catch(err){
        console.log("error: "+err);
        navegation.navigate("Login");
    }

}

function* salvarDadosLogado(action){
    yield put(Logou(action.payload));
}


export default function* usuarioRoot(){
    yield takeLatest("ASYNC_LOGAR",login);
    yield takeLatest("SALVAR_DADOS_LOGADO",salvarDadosLogado);
    yield takeLatest("GET_USERS",pegarUsuarios);
}