import { createStackNavigator, createAppContainer,createDrawerNavigator } from "react-navigation";
import {useDispatch} from "react-redux"
//importando views
import LoginScreen from "./Views/Login";
import CadastroScreen from "./Views/Cadastro";
import UsuariosScreen from "./Views/Usuarios";
import ConversaScreen from "./Views/Conversa";
import SideMenu from "./components/SideMenu";


const DrawerNavigator = createDrawerNavigator(
    {
      Inicio: UsuariosScreen,
      Conversa:ConversaScreen
    },
    {
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      overlayColor: '#6b52ae',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
      },
      initialRouteName:"Inicio",
      contentComponent:SideMenu
    }
  );


const AppNavigator = createStackNavigator({
    Login:LoginScreen,
    Cadastro:CadastroScreen,
    Home:DrawerNavigator,
  },{
    initialRouteName:"Login",
    defaultNavigationOptions:{
      header:null
    }
  });
  
  export default createAppContainer(AppNavigator);