import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodos } from './actions';
import TodoListView from './TodoListView';

// container component
class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  
  render() {
    return <TodoListView container={this} />
  }
}

const mapStateToProps = state => {
  const todos = state.todos.map(todo => ({ key: todo.text, ...todo }))
  return { todos }
}

const mapDispatchToProps = {
  addTodo,
  getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);