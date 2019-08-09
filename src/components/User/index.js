import React from 'react';
import { Container,ContainerTitle,Imagem,Conversa,Username,Offline,Online } from './styles';
import {useDispatch} from "react-redux";

export default function User({user}) {
const dispatch = useDispatch();

function handleConversa(){
   dispatch({type:"SELECT_USER",payload:user});
}
  return (
    <Container onPress={() => handleConversa()}>
        <Imagem source={{uri:user.imgUrl}}/>
        <ContainerTitle>
            <Username>{user.name}</Username>
            <Conversa>{user.conversas.length > 0 ? user.conversas[user.conversas.length -1].msg : ""}</Conversa>
        </ContainerTitle>
        {user.online ? (<Online />): (<Offline/>)}
    </Container>
  );
}
