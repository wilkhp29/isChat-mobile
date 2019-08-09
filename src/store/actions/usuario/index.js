export function LOGAR(navegation){
      return {
          type:"ASYNC_LOGAR",navegation}
    };
export function CADASTRAR(navegation) {
       return{ 
           type:"ASYNC_CADASTRAR",navegation}
    };
export function SAIR (navegation) {
        return{  
            type:"ASYNC_SAIR",navegation}
    };
export function EDITARINPUTS(payload){
        return{   
            type:"EDITINPUT",
        payload:payload}
    };
export function Logou(payload){
        return{   
            type:"Logou",
        payload:payload}
};
export function SalvarDadosLogado(payload){
    return{
        type:"SALVAR_DADOS_LOGADO",
        payload:payload
    }
}

export function GET_USERS(payload){
    return{
        type:"GET_USERS",
        payload:payload
    }
}
export function SET_USERS(payload){
    return{
        type:"SET_USERS",
        payload:payload
    }
}
