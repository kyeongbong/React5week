import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie"

import {auth} from "../../shared/firebase";

// actions

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


// action creators

const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));

// initialState

  const initialState = {
    user : null,
    is_login : false,
  };

  const user_initial ={
    user_name: 'kbong',
  }


// middleware actions

const loginAction = (user) => {
  return function (dispatch, getState, {history}){
    console.log(history);
    dispatch(setUser(user));
    history.push('/');
  };
};

const SignupFB = (id, pwd, name) => {
  return function (dispatch, getState, {history}){

    auth
    .createUserWithEmailAndPassword(id, pwd)
    .then((user) => {

      console.log(user)
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage)
      // ..
    });

  }
}


//reducer

export default handleActions({

    [SET_USER] : (state, action) => produce(state, (draft)=>{
      setCookie("is_login", "success")

      draft.user = action.payload.user;
      draft.is_login = true;
    }),

    [LOG_OUT] : (state, action) => produce(state, (draft)=>{
      deleteCookie("is_login");
      draft.user = null;
      draft.is_login = false;
    }),

    [GET_USER] : (state, action) => produce(state, (draft)=>{

    }),
  }, initialState );


// action creater export

const actionCreators = {
  logOut,
  getUser,
  loginAction,
};


export {actionCreators};