import React from 'react';
import { View } from 'react-native';
import Header from "../../components/header";
import Conversas from "../../components/conversas";
import Send from "../../components/send";

// import { Container } from './styles';

export default function conversas() {
  return (
    <>
        <Header />
        <Conversas />
        <Send />
    </>
  );
}
