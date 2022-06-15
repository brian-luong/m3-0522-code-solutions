import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
    .then(res => res.json())
    .then(data => this.setState({
      todos: data
    }))
    .catch(err => console.error('Fetched failed!', err))
  }


  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo)
    })
    .then(res => res.json())
    .then(todo => {
      const allTodos = this.state.todos.concat(todo)
      this.setState({ todos: allTodos
})
    })
    .catch(err => console.error('Fetched failed!', err))

  }

  toggleCompleted(todoId) {
    const oldTodo = this.state.todos.find(todo => {
      return todo.todoId === todoId
    })

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted: !oldTodo.isCompleted })
    })
    .then(res => res.json())
    .then(updated => {
     const allTodos = this.state.todos.map(original => {
      return original.todoId === updated.todoId
      ? updated
      : original
     })
     this.setState({ todos: allTodos })

    })
    .catch(err => console.error('Fetched failed!', err))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
