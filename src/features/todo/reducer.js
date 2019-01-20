import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
} from './actiontypes';

const INITIAL_STATE = {
  todos: [],
  loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, loading: true}
    case ADD_TODO_SUCCESS:
      return {...state, loading: false, todos: action.payload.data}
    case ADD_TODO_FAIL:
      return {...state, loading: false, error: 'Failed adding the todo'}
    case GET_TODOS:
      return {...state, loading: true}
    case GET_TODOS_SUCCESS:
      return {...state, loading: false, todos: action.payload.data}
    case GET_TODOS_FAIL:
      return {...state, loading: false, error: 'Failed to fetch todos'}
    default: 
      return state
  }
}

export default reducer;