/** @format */

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import todoReducer from './src/features/todo/reducer';
import TodoList from './src/features/todo/TodoList';

const client = axios.create({
  baseURL: 'http://localhost:2333',
  responseType: 'json'
})

const store = createStore(todoReducer, applyMiddleware(thunk, axiosMiddleware(client)))

Navigation.registerComponentWithRedux(`TodoList`, () => TodoList, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: true
          }
        },
        children: [
          {
            component: {
              name: 'TodoList'
            }
          }
        ]
      }
    }
  });
});