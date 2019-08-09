import React from 'react';
import {Icon} from "native-base";
import { Container,Input,SendContainer } from './styles';
import {useSelector,useDispatch} from "react-redux";
export default function send() {
  const dispatch = useDispatch();
  const msg = useSelector(state => state.usuarios.msg);

  function sendeMensagem(){
    dispatch({type:"ASYNC_SEND"});
  }
  return (
    <Container>
      <Input onSubmitEditing={() => sendeMensagem()} value={msg} onChangeText={ text => dispatch({type:"SET_MSG",payload:text})}/>
      <SendContainer onPress={() => sendeMensagem()}>
        <Icon name="ios-send"  type="Ionicons" />
      </SendContainer>
    </Container>
  );
}
