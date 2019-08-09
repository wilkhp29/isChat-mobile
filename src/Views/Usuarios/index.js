import React, { useEffect } from 'react';
import {connect,useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import User from "../../components/User";
import * as actions from "../../store/actions/usuario";

const  usuarios = ({actions,navigation}) => {
const Usuarios = useSelector(state => state.usuarios.listUsuario);
const selectUsuario = useSelector(state => state.usuarios.userSelect);
    useEffect( () => {
        actions.GET_USERS(navigation);
    },[]);

    useEffect( () => {
        if(selectUsuario._id){
            navigation.navigate("Conversa");
        }
    },[selectUsuario]);

      return (Usuarios.map(user => <User key={user._id} user={user}/>));
      
};

const mapDispatchToProps = dispatch =>{
 return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(null,mapDispatchToProps)(usuarios); 

