import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';

const url = "http://localhost:8080";

export function loading() {
  return {
    type: types.LOADING
  };
}

export function badResponse(errorMessage) {
  return {
    type: types.UPDATE_ERROR,
    message: errorMessage
  }
}

export function createTask() {
  return {
    type: types.CREATE_NEW_TASK
  };
}

export function updateNewTask(key, value) {
  return {
    type: types.UPDATE_NEW_TASK,
    key,
    value
  };
}

export function deleteTask(taskID) {
  return function(dispatch) {
    dispatch(loading());
    fetch(url.concat("/task/", taskID), {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      dispatch(loading());
      if(response.status !== 200) throw response;
      dispatch({
        type: types.DELETE_TASK,
        taskID
      })
    })
    .catch((err) => {
      dispatch(badResponse(err));
    })
  }
}

export function submitTask(newTask) {
  return function(dispatch) {
    dispatch(loading());
    fetch(url.concat("/task"), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    .then(response => {
      dispatch(loading());
      if(response.status !== 201) throw response;
      return response.json()
    })
    .then(response => {
      dispatch({
        type: types.ADD_TASK,
        task: response
      })
    })
    .catch((err) => {
      dispatch(badResponse(err));
    })
  }
}

export function getTasks(createdOrEnd = "all", value = "1") {
  return function(dispatch) {
    dispatch(loading());
    fetch(url.concat(`/task/${createdOrEnd}/${value}`), {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      dispatch(loading());
      if(response.status !== 200) throw response;
      return response.json()
    })
    .then(response => {
      dispatch({
        type: types.UPDATE_TASKS,
        tasks: response
      })
    })
    .catch((err) => {
      dispatch(badResponse(err));
    })
  }
}

export function filterByDate(date) {
  return {
    type: types.FILTER_BY_DATE,
    date
  }
}
