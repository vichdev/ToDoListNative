import {Divider} from '@rneui/base';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useTodoContext} from '../../context/ToDoContext';
import * as Styles from './styles';

const MyTasks: React.FC = () => {
  const {tasks, setNewTask, setTasks} = useTodoContext();

  function handleOnChange(id: number) {
    const updateActiveState = tasks.map((item, index) => {
      if (id === index) {
        return {...item, active: !item.active};
      }
      return item;
    });
    setTasks(updateActiveState);
  }

  return (
    <Styles.MyTasksWrapper>
      <Styles.ToDoListTitle>Minhas Tarefas</Styles.ToDoListTitle>
      <Styles.HeaderContainer>
        <Styles.HeaderTitle>TAREFA</Styles.HeaderTitle>
        <Styles.HeaderTitle>STATUS</Styles.HeaderTitle>
      </Styles.HeaderContainer>
      <Divider />
      <FlatList
        data={tasks}
        keyExtractor={index => index}
        renderItem={({item, index}) => {
          return (
            <>
              <Styles.MyTasksContainer key={index}>
                <Styles.MyTask>{item.name}</Styles.MyTask>
                <Styles.StatusContainer>
                  <Styles.Status
                    isActive={item.active}
                    onPress={() => {
                      handleOnChange(index);
                    }}
                  />
                </Styles.StatusContainer>
              </Styles.MyTasksContainer>
              <Divider />
            </>
          );
        }}
      />
    </Styles.MyTasksWrapper>
  );
};

export default MyTasks;
