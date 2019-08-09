import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Container,Eu,Voce,VoceContainer,Imagem } from './styles';

export default function conversas() {
  const conversas = useSelector(state => state.usuarios.userSelect.conversas.map(item => item).filter((elem, index, self) => index === self.indexOf(elem)));
  const eu = useSelector(state => state.usuarios.dadosUser);
  const user = useSelector(state => state.usuarios.userSelect);
 
  useEffect(() => {
     
      setTimeout(() =>  this.scrollView.scrollToEnd({animated:true,duration:1000}),500);
  },[conversas]);

  return (
    user._id ?
    <Container  ref={ref => this.scrollView = ref}>
      { conversas.map(msg => 
        msg.de === eu._id ? 
        (<Eu key={msg._id}>{msg.msg}</Eu>) :
        (<VoceContainer key={msg._id}>
        <Imagem source={{uri:user.imgUrl}}/>
      <Voce>{msg.msg}</Voce>
      </VoceContainer>))} 
    </Container>
      : (<></>)
  );

  
}
