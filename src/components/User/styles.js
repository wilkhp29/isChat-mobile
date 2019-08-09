import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    padding:10px;
    flex-direction:row; 
    border-bottom-width:1px;
    border-bottom-color:#ccc;
`;

export const Imagem = styled.Image`
    width:60px;
    height:60px;
    border-radius:30px;
`;


export const ContainerTitle = styled.View`
    justify-content:center;
    margin-left:20px;
`;


export const Username = styled.Text`
    font-weight:bold;
    font-size:18px;
`;


export const Conversa = styled.Text`
    color: #3d3d3d;
    font-size:16px;
`;


export const Online = styled.View`
    width:10px;
    height:10px;
    border-radius:10px;
    background:#2ecc71;
    position:absolute;
    right:10px;
    top:30px;
`;



export const Offline = styled.View`
    width:10px;
    height:10px;
    border-radius:10px;
    background:#ccc;
    position:absolute;
    right:10px;
    top:30px;
`;