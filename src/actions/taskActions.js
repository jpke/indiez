import fetch from 'isomorphic-fetch';

const url = "http://localhost:8080";

export function loading() {
  return {
    type: types.LOADING
  };
}

export function createTask() {
  return {
    type: types.CREATE_NEW_TASK
  };
}

export function deleteTask(taskID) {
  return {
    type: types.DELETE_TASK,
    taskID
  };
}

export function updateNewTask(key, value) {
  return {
    type: types.UPDATE_NEW_TASK,
    key,
    value
  };
}

export function submitTask(newTask) {
  console.log("call api here");
  // return function(dispatch) {
  //   dispatch(loading());
  //   fetch(url.concat("task"), {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(newTask)
  //   })
  //   .then(response => {
  //     dispatch(loading());
  //     if(response.status !== 201) throw response;
  //     return response.json()
  //   })
  //   .then(response => {
  //     dispatch({
  //       type: types.ADD_TASK,
  //       task: response.task
  //     })
  //   })
  // }
}

export function getTasks() {
  console.log("call api here");
  // return function(dispatch) {
  //   dispatch(loading());
  //   fetch(url.concat("task"), {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(response => {
  //     dispatch(loading());
  //     if(response.status !== 200) throw response;
  //     return response.json()
  //   })
  //   .then(response => {
  //     dispatch({
  //       type: types.UPDATE_TASKS,
  //       tasks: response.tasks
  //     })
  //   });
  // }
}
