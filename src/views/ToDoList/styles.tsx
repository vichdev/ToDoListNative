import styled from 'styled-components/native';

export const ToDoListWrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: #282c34;
`;

export const UsernameContainer = styled.View`
  padding: 10px;
`;

export const Username = styled.Text`
  font-size: 24px;
  color: #ff6600;
`;

export const UsernameTitle = styled.Text`
  font-size: 24px;
  color: white;
`;

export const ToDoListTitle = styled.Text`
  font-size: 24px;
  color: white;
`;

export const AddToDoContainer = styled.View<{display: Boolean}>`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  display: ${props => (props.display ? 'flex' : 'none')};
`;

export const AddToDoInput = styled.TextInput`
  background-color: #202024;
  color: white;
  width: 80%;
  padding: 7px;
  border-radius: 10px;
`;

export const NewToDoContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;

export const NewToDoTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
