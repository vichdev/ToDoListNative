import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import MyTasks from '../../components/MyTasks';
import {useTodoContext} from '../../context/ToDoContext';
import * as Styles from './styles';

const Home: React.FC = () => {
  const [showInputTask, setShowInputTask] = useState<Boolean>(false);
  const {username, setNewTask, handleNewTask, newTask} = useTodoContext();

  return (
    <Styles.ToDoListWrapper>
      <Styles.UsernameContainer>
        <Styles.UsernameTitle>
          Bem-vindo, <Styles.Username>{username}</Styles.Username>.
        </Styles.UsernameTitle>
      </Styles.UsernameContainer>
      <Styles.NewToDoContainer>
        <Styles.NewToDoTitleWrapper>
          <Styles.ToDoListTitle>Adicione uma nova tarefa </Styles.ToDoListTitle>
          {showInputTask ? (
            <Icon
              name="remove"
              backgroundColor="#ff6600"
              color="white"
              borderRadius={90}
              onPress={() => setShowInputTask(false)}
            />
          ) : (
            <Icon
              name="add"
              backgroundColor="#ff6600"
              color="white"
              borderRadius={90}
              onPress={() => setShowInputTask(!showInputTask)}
            />
          )}
        </Styles.NewToDoTitleWrapper>
        <Styles.AddToDoContainer display={showInputTask}>
          <Styles.AddToDoInput
            value={`${newTask.name}`}
            onChangeText={text => {
              setNewTask({
                name: text,
                active: false,
              });
            }}
          />
          <Icon
            name="add"
            color="white"
            onPress={() => {
              setShowInputTask(!showInputTask);
              handleNewTask(newTask);
              setNewTask({name: ''});
            }}
          />
        </Styles.AddToDoContainer>
      </Styles.NewToDoContainer>
      <MyTasks />
    </Styles.ToDoListWrapper>
  );
};

export default Home;
