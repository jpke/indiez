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

export function editFilterBy(filterType, date) {
  return {
    type: types.FILTER_BY,
    date,
    filterType
  };
}

export function createTask(ID = "new") {
  return {
    type: types.CREATE_NEW_TASK,
    ID
  };
}

export function updateNewTask(key, value, ID) {
  return {
    type: types.UPDATE_NEW_TASK,
    key,
    value,
    ID
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
      dispatch(badResponse("Delete task error"));
    })
  }
}

export function submitTask(newTask) {
  return function(dispatch) {
    dispatch(loading());
    if(!newTask._id){
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
        dispatch(badResponse("Create new task "));
      })
    }
    else {
      fetch(url.concat("/task"), {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newTask)
      })
      .then(response => {
        dispatch(loading());
        if(response.status !== 200) {throw response;}
        return response.json()
      })
      .then(response => {
        dispatch({
          type: types.UPDATE_TASK,
          task: response
        })
      })
      .catch((err) => {
        console.log("error: ", err);
        dispatch(badResponse("Task update "));
      })
    }
  }
}

export function getTasks(filterByType = "all", filterBy = "1") {
  return function(dispatch) {
    if(filterBy != "1") filterBy = new Date(filterBy).getTime();
    console.log("filterBy: ", filterBy);
    dispatch(loading());
    fetch(url.concat(`/task/${filterByType}/${filterBy}`), {
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
      dispatch(badResponse("Problem fetching tasks"));
    })
  }
}
