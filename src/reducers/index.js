// Set up your root reducer here...
 // import { combineReducers } from 'redux';
 // export default combineReducers;

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
     {
       name: "task one",
       end: new Date(Date.now() + (1000*60*60*24)),
       description: "first task to complete",
       created: Date.now(),
       id: 1,
       createdBy: "JP"
     },
     {
       name: "task two",
       end: new Date(Date.now() + (1000*60*60*24*2)),
       description: "second task to complete",
       created: Date.now(),
       id: 2,
       createdBy: "JP"
     }
   ]
 }

 export default function rootReducer(state = initialState, action) {
   //declare vars
   let newTask;

   switch(action.type) {

     case types.LOADING:
      return {
        ...state,
        loading: !state.loading
      };
     case types.CREATE_NEW_TASK:
      return {
        ...state,
        createNewTask: !state.createNewTask
      };
     case types.UPDATE_NEW_TASK:
      //logic for new task
      console.log("new task key: ", key, " and value: ", value);
      newTask = state.newTask
      return {
        ...state,
        newTask: newTask
      }
     case types.DELETE_TASK:
      console.log("delete task: ", action.taskID)
      return {
        ...state,
        tasks: state.tasks
      };
     case types.UPDATE_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };
     case types.FILTER_BY_DATE:
      return {
        ...state,
        tasks: action.tasks
      };
      case types.UPDATE_ERROR:
        return {
          ...state,
          errorMessage: action.message
        }
     default:
      return state;
   }
 }
