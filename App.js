import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHome from "./Componentes/TelaHome";
import TelaDescricao from "./Componentes/TelaDescricao";
import TelaRotas from "./Componentes/TelaRotas";
import TelaBiblioteca from "./Componentes/TelaBiblioteca";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator>
        <Abas.Screen name="Home" component = { TelaHome }/>
        <Abas.Screen name="Telas" component = { TelaDescricao } />
        <Abas.Screen name="Rotas" component = { TelaRotas } />
        <Abas.Screen name="Biblioteca" component = { TelaBiblioteca } />
      </Abas.Navigator>
    </NavigationContainer>
  )
};