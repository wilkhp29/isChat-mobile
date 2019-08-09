import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

getToken = async () =>{
    try {
        const Token = await AsyncStorage.getItem('token');
        if(Token !== null) {
          console.log(Token);
          
          return Token;
        }

        return "";
      } catch(e) {
        console.log(e);
      }
}

const newAxios = axios.create({
  baseURL:"https://is-chat.herokuapp.com/v1/",
  timeout: 1000,
  
});

newAxios.interceptors.request.use(async response => {
  const token = await getToken();
 response.headers.Authorization = 'Bearer '+token;
 return response;
},err => {
})

newAxios.interceptors.response.use( response =>{
 
 return response
},
async err => {
  debugger
    if(err.response && err.response.status === 500){
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      return err;
    }
    
    return err;
})
export default newAxios