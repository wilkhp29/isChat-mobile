import io from "socket.io-client";
export default function (store){
    socket = io("https://is-chat.herokuapp.com/");

    socket.on("conversa",function(data){
        store.dispatch({type:"SET_MENSAGEM",payload:data});
    });

    socket.on("usuario",function(data){
      //  store.dispatch({type:"SET_MENSAGEM",payload:data});
    });

} 
