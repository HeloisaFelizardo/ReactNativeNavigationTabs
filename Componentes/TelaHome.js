import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaHome () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Como navegar?
      </Text>

      <Text style={estilo.texto}>
        Toque nas abas abaixo para navegar entre as telas. 
      </Text>
    </View>
  );
}