import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-width:1px;
  border-top-color:#cfcfcf;
  flex-direction:row;
  align-items:center;
  padding:10px;
`;

export const Input = styled.TextInput`
    flex:1;
    border-width:1px;
    border-color:#cfcfcf;
    border-radius:10px;
    margin-right:5px;
`;

export const SendContainer = styled.TouchableOpacity`
  padding:10px;
  border-width:1px;
  border-color:#cfcfcf;
  border-radius:5px;
`;
