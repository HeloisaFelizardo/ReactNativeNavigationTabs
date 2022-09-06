import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaBiblioteca () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Qual biblioteca usamos?
      </Text>

      <Text style={estilo.texto}>
        Das bibliotecas que utilizamos podemos destacar duas:
      </Text>

      <Text style={estilo.texto}>
        @react-navigation/native e 
      </Text>
      
      <Text style={estilo.texto}>
        @react-navigation/bottom-tabs.
      </Text>
    </View>
  );
}