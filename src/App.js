
import React, { Component } from 'react';
import './App.css';
// import Form from './components/Form/Form';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import ColorPicker from './components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'Todo 1', completed: true},
      {id: 'id-2', text: 'Todo 2', completed: false},
      {id: 'id-3', text: 'Todo 3', completed: false},
      {id: 'id-4', text: 'Todo 4', completed: false},
    ],
  }

  formSubmitHandler = data => {
   console.log(data)
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
            if (todo.id === todoId) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
    
            return todo;
    })
  }))};

  render() {
    const {todos} = this.state;
    const completedTodosCount = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <>
      {/* <Form onSubmit={this.formSubmitHandler}/> */}
  {/* <Dropdown />  */}
  {/* <ColorPicker options={colorPickerOptions}/>
  <Counter initialValue={10}/> */}
  <div>
    <p>Загальна к-сть Todo: {todos.length}</p>
    <p>К-сть виконаних: {completedTodosCount}</p>
  </div>

  <TodoList 
  todos={todos} 
  onDeleteTodo={this.deleteTodo}
  onToggleCompleted={this.toggleCompleted}
  />
 </>
    );
  }
}



export default App;
