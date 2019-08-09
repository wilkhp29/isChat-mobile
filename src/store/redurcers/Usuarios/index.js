const init = {
    dadosUser:{
        CreatedAt: "",
        email: "",
        imgUrl: "",
        name: "",
        online: false,
        __v: 0,
        _id: "",
    },
    listUsuario:[],
    userSelect:{},
    msg:""
}

export default function(state = init,action){
   switch (action.type) {
    case "EDITINPUT":
            state = {...state,
                dadosUser:action.payload,
            }
           return state;
        case  "Logou":            
                state = {...state,
                    dadosUser:action.payload,
                }
               return state;
        case "SET_USERS":
                state.listUsuario = action.payload;                
            return state;
        case "SET_MENSAGEM":
            const msg = action.payload; 
            if(state.userSelect._id === msg.de || state.userSelect._id  === msg.para){
                state.userSelect.conversas.push(msg);
            }
           
            state.listUsuario = state.listUsuario.map(user => {
                if(user._id === msg.de || user._id === msg.para){
                    user.conversas.push(msg);
                }
                return user;
            });
            
           


            return state;
        case "SELECT_USER":
            state.userSelect = action.payload;
            return state
        case "LIMPAR_SELECAO":
            state.userSelect = {};
            return state;
        case "SET_MSG":
            state.msg = action.payload;
            return state;
       default:
           return state
   }
}