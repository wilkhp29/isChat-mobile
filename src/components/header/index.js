import React,{useEffect} from 'react';
import {Icon} from "native-base";
import { Container,Imagem,Username,ContainerArrow } from './styles';
import {useSelector,useDispatch} from "react-redux";

export default function header({navigation}) {
    const user = useSelector(state => state.usuarios.userSelect);

    const dispatch = useDispatch();

    function voltar(){
      dispatch({type:"LIMPAR_SELECAO"})
      navigation.navigate("Inicio");

    }
  return (
    <Container >
      {user != null ? 
      (
        <>
        <ContainerArrow onPress={() => voltar()}>
            <Icon name="ios-arrow-back" type="Ionicons"/>
        </ContainerArrow>
        <Imagem source={{uri:user.imgUrl}}/>
        <Username>{user.name}</Username>
        </>) : (<></>)}
    </Container>
  );
}
