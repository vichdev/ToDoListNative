import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const ToDoContext = createContext({} as ITodoList);

interface ITodoList {
  username: String;
  setUsername: Dispatch<SetStateAction<String>>;
  tasks: Array<INewTask>;
  setTasks: Dispatch<SetStateAction<INewTask[]>>;
  newTask: INewTask;
  setNewTask: Dispatch<SetStateAction<INewTask>>;
  handleNewTask: (newTask: INewTask) => void;
}

interface INewTask {
  name?: String;
  active?: boolean;
}

type IPropsContext = {
  children: React.ReactNode;
};

const Context: React.FC<IPropsContext> = ({children}) => {
  const [username, setUsername] = useState<String>('');
  const [newTask, setNewTask] = useState<INewTask>({
    name: '',
    active: false,
  });
  const [tasks, setTasks] = useState<INewTask[]>([]);

  function handleNewTask() {
    setTasks([...tasks, newTask]);
  }

  return (
    <ToDoContext.Provider
      value={{
        username,
        setUsername,
        tasks,
        setTasks,
        newTask,
        setNewTask,
        handleNewTask,
      }}>
      {children}
    </ToDoContext.Provider>
  );
};

function useTodoContext() {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error('O hook deve ser usado como provider!');
  }
  return context;
}

export {Context, useTodoContext};
