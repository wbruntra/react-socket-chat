import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import reducers from './reducers';

const socketUrl = process.env.REACT_APP_SOCKET_URL

let socket = io(socketUrl);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const store = createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools(applyMiddleware(socketIoMiddleware, reduxThunk)),
);

store.subscribe(()=>{
  console.log('new client state', store.getState());
});

export default store;
