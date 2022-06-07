import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import styled from 'styled-components/native';
import {useTodoContext} from '../../context/ToDoContext';

const HomeWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #282c34;
`;

const HomeTitle = styled.Text`
  font-size: 24px;
  color: white;
`;

const HomeForm = styled.TextInput`
  background-color: #202024;
  color: white;
  padding: 15px;
`;

const FormContainer = styled.View`
  width: 90%;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
`;

const Home: React.FC = ({navigation}: any) => {
  const {username, setUsername} = useTodoContext();

  const checkNameInput = () => {
    if (!username.trim()) {
      Alert.alert('Nenhum nome digitado', 'Por favor, digite um nome.');
      return;
    }
    return navigation.navigate('ToDoList');
  };

  return (
    <HomeWrapper>
      <FormContainer>
        <HomeTitle>Bem vindo!</HomeTitle>
        <HomeForm
          placeholder="Digite seu nome"
          onChangeText={setUsername}
          placeholderTextColor="white"
        />
        <Button title="Entrar" color="#ff6600" onPress={checkNameInput} />
      </FormContainer>
    </HomeWrapper>
  );
};

export default Home;
