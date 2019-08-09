import React, { Component } from 'react';
import {Container,ContainerButton,ContainerForm,ContainerTitle,Title,SubTitle,Line,ContainerInput,Input,Button,Text} from "./styles";
import {Icon} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as usuarioActions from "../../store/actions/usuario";
import AsyncStorage from '@react-native-community/async-storage';

class index extends Component {
    static navigationOptions = {
        header:null
      };

      changeInput = (text,input) =>{
          const {email,imgUrl,name,password} = this.props.dadosUser;   
            if(input == "email"){
                this.props.actions.EDITARINPUTS({
                    email:text,
                    name,
                    password,
                    imgUrl
                });
            }else if(input == "password"){
                this.props.actions.EDITARINPUTS({
                    email,
                    name,
                    password:text,
                    imgUrl
                });
            }     
      }

      logarApp = () =>{
          this.props.actions.LOGAR(this.props.navigation);
      }

      componentDidMount = async() =>{
        try {
            const Token = await AsyncStorage.getItem('token');
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            if(Token !== null && user !== null) {
                this.props.actions.SalvarDadosLogado(user);
                this.props.navigation.navigate("Home");
              
            }
          } catch(e) {
            console.log(e);
          }
      }
      
    render() {
        return (
          <Container>
              <ContainerTitle >
                  <Title>Log in</Title>
                  <Line/>
                  <SubTitle>Please Log in to Account to Continue with is Chat.</SubTitle>
              </ContainerTitle>
              <ContainerForm >
                  <ContainerInput>
                        <Icon name="email-outline" style={{color:'#c0392b'}} type="MaterialCommunityIcons"/>
                        <Input placeholder="Email Address" onChangeText={(text) => this.changeInput(text,"email") }  returnKeyType="next" value={this.props.userEmail} onSubmitEditing={() => this.passwordInput.focus()} />
                  </ContainerInput>
                  <ContainerInput>
                        <Icon name="lock" style={{color:'#c0392b'}} type="Feather"/>
                        <Input ref={(input) => this.passwordInput = input }  onChangeText={(text) => this.changeInput(text,"password") } value={this.props.userPassword} onSubmitEditing={() => this.logarApp()} placeholder="Password" secureTextEntry/>
                  </ContainerInput>
              </ContainerForm>

              <ContainerButton >
                    <Button onPress={() => this.logarApp()}>
                        <LinearGradient style={{Padding:10,width:'100%',alignItems:'center',Padding: 20}} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={['#c0392b', '#ff7675']}>
                        <Text>Login</Text>
                        </LinearGradient>
                    </Button>
              </ContainerButton>
          </Container>
        )
    }
}


const mapStateToProps = state => ({
   userEmail: state.usuarios.dadosUser.email,
   userPassword:state.usuarios.dadosUser.password,
   dadosUser:state.usuarios.dadosUser
});

const mapDispatchToProps = dispatch =>{
  return {actions:bindActionCreators(usuarioActions, dispatch)};
}
export default connect(mapStateToProps,mapDispatchToProps)(index);