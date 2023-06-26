import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';
// import Form from './components/Form/Form';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import TodoList from './components/TodoList';
// import TodoEditor from './components/TodoEditor/TodoEditor';
// import Filter from './components/Filter/Filter';
import todos from './todos.json';
import Modal from './components/Modal';
import Tabs from './components/Tabs';
import tabs from './tabs.json'
// import Clock from './components/Clock/Clock';

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
    todos: todos,
    filter: '',
    showModal: false,
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

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
      }),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // todos, 
    
    return (
      <>
      <Tabs items={tabs}/>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Modal</h1>
            <p>lorem50</p>
          </Modal>
        )}
        {/* <Form onSubmit={this.formSubmitHandler}/> */}
        {/* <Dropdown />  */}
        {/* <ColorPicker options={colorPickerOptions}/>
  <Counter initialValue={10}/> */}
        {/* <div>
    <p>Загальна к-сть Todo: {todos.length}</p>
    <p>К-сть виконаних: {this.calculateCompletedTodos()}</p>
  </div>
  <TodoEditor onSubmit={this.addTodo} />

  <Filter value={this.state.filter} onChange={this.changeFilter} />

  <TodoList 
  todos={this.getVisibleTodos()} 
  onDeleteTodo={this.deleteTodo}
  onToggleCompleted={this.toggleCompleted}
  /> */}
      </>
    );
  }
}

export default App;
