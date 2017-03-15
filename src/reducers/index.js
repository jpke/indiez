import * as types from '../constants/actionTypes';

 const initialState = {
   loading: false,
   errorMessage: "",
   createNewTask: false,
   newTask: {
     name: "task name",
     end: new Date(Date.now() + (1000*60*60*24)),
     description: "task description",
     createdBy: "your name"
   },
   tasks: [
     {}
    //  {
    //    name: "task one",
    //    end: new Date(Date.now() + (1000*60*60*24)),
    //    description: "first task to complete",
    //    created: Date.now(),
    //    id: 1,
    //    createdBy: "JP"
    //  },
    //  {
    //    name: "task two",
    //    end: new Date(Date.now() + (1000*60*60*24*2)),
    //    description: "second task to complete",
    //    created: Date.now(),
    //    id: 2,
    //    createdBy: "JP"
    //  }
   ]
 }

 export default function rootReducer(state = initialState, action) {
   //declare vars
   let newTask, tasks;

   switch(action.type) {

     case types.LOADING:
      return {
        ...state,
        loading: !state.loading
      };
     case types.UPDATE_ERROR:
      return {
        ...state,
        errorMessage: action.message
      }
     case types.CREATE_NEW_TASK:
      return {
        ...state,
        createNewTask: !state.createNewTask
      };
     case types.UPDATE_NEW_TASK:
      //logic for new task
      console.log("new task key: ", action.key, " and value: ", action.value);
      newTask = state.newTask
      return {
        ...state,
        newTask: newTask
      }
     case types.DELETE_TASK:
      console.log("delete task: ", action.taskID);
      tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks = tasks.filter((task) => {return task.id !== action.taskID});
      return {
        ...state,
        tasks: tasks
      };
     case types.ADD_TASK:
      newTask = JSON.parse(JSON.stringify(action.task));
      newTask.id = state.tasks.length + 1;
      tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks = tasks.concat(newTask)

      return {
        ...state,
        tasks: tasks
      }
     case types.UPDATE_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };
     case types.FILTER_BY_DATE:
      tasks = JSON.parse(JSON.stringify(state.tasks));

      return {
        ...state,
        tasks: tasks
      };
      default:
       return state;
   }
 }
