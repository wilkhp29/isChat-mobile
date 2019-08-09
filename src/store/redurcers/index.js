import {combineReducers} from "redux";
import usuarios from "./Usuarios";
import conversas from "./Conversas";

export default combineReducers({
    usuarios,
    conversas
});