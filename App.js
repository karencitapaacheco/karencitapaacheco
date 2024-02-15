import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://www.peliculas.com/sample.json');
    console.log(response.data);
  
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    
  }
};

fetchData();


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled.Button`
  margin-top: 10px;
`;


const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Página de Inicio</Title>
      <Button
        title="Ver Series"
        onPress={() => navigation.navigate('Series')}
      />
      <Button
        title="Ver Películas"
        onPress={() => navigation.navigate('Peliculas')}
      />
    </Container>
  );
};

const SeriesScreen = () => {
  return (
    <Container>
      <Title>Series</Title>
      {Series1}
    </Container>
  );
};

const PeliculasScreen = () => {
  return (
    <Container>
      <Title>Películas</Title>
      {moves1}
    </Container>
  );
};


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Series" component={SeriesScreen} />
        <Stack.Screen name="Peliculas" component={PeliculasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
