import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex:1;
  background-color:#fff;
  padding:20px;
`;

export const ContainerTitle = styled.View`
  margin-bottom:5px;
`;

export const Title = styled.Text`
    font-size:21px;
    color: #000;
    font-family:'Poppins';
    font-weight:bold;
`;

export const Line = styled.View`
  background-color: #c0392b;
  height: 3px;
  width:30px;
  margin-top:5px;
  margin-bottom: 20px;
`;
export const SubTitle = styled.Text`
    font-size:15px;
    color:#666666;
`;

export const ContainerForm = styled.View`

`;

export const ContainerInput = styled.View`
    flex-direction:row;
    align-items:center;
    border:1px #ccc;
    border-radius:5px;
    padding:5px;
    margin-bottom:10px;
`;

export const Input = styled.TextInput`
  flex:1
`;

export const ContainerButton = styled.View`
  
`;

export const Button = styled.TouchableOpacity`
  overflow:hidden;
  elevation:15;
  background:green;
`;
export const Text = styled.Text`
  
`;
