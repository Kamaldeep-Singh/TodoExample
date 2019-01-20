import {
  ADD_TODO,
  GET_TODOS
} from './actiontypes';

export const getTodos = () => ({
  type: GET_TODOS,
  payload: {
    request: {
      url: '/',
    }
  }
});

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    request: {
      url: '/add',
      method: 'post',
      headers: { 'content-type': 'application/json' },
      data: {
        text,
        created: Date().toString()  
      }
    }
  }
});
