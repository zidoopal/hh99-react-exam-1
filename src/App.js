import './App.css';
import { useState } from 'react';

function App() {
  // input
  const [title, setTitle] = useState('');

  // TodoList
  const [todos, setTodos] = useState([
    {
      title: 'react를 배워봅시다',
    },
  ]);

  // input 입력값 Todos에 반영
  const onChangeContent = (e) => setTitle(e.target.value);

  // TodoList에 입력 값 추가
  const addTodoHandler = () => {
    const newTodo = {
      id: todos[todos.length - 1] + 1,
      title,
    };

    setTodos([...todos, newTodo]);
    setTitle('');
  };

  return (
    <div className="App">
      <div className="input-group">
        <input
          type="text"
          name="title"
          className="input-body"
          value={title}
          onChange={onChangeContent}
        />
        <button type="submit" onClick={addTodoHandler}>
          추가하기
        </button>
      </div>
      <h1 className="title">Todo List</h1>
      <div className="todo-container">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
