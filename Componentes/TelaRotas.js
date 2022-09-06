import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaRotas () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        O que é uma rota?
      </Text>

      <Text style={estilo.texto}>
        Rota é a associação entre um componente e o caminho até ele
      </Text>
    </View>
  );
}