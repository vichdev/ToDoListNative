import styled from 'styled-components/native';

export const MyTasksWrapper = styled.View`
  padding: 10px;
`;

export const MyTasksContainer = styled.View`
  width: 100%;
  max-width: 85%;

  align-items: center;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const MyTask = styled.Text`
  color: white;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  max-width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  color: white;
  margin-bottom: 5px;
`;

export const Status = styled.TouchableOpacity<{isActive: Boolean | undefined}>`
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 9999px;
  background-color: ${props => (props.isActive ? 'green' : 'red')};
`;

export const StatusContainer = styled.View`
  align-items: center;
  width: 20%;
`;

export const ToDoListTitle = styled.Text`
  font-size: 24px;
  color: white;
  margin-bottom: 15px;
`;
