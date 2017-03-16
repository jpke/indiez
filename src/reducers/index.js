import * as types from '../constants/actionTypes';

 const initialState = {
   loading: false,
   errorMessage: "",
   createNewTask: false,
   filterType: "all",
   filterBy: "",
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
   let newTask, tasks, index;

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
     case types.FILTER_BY:
       return {
         ...state,
         filterBy: action.date,
         filterType: action.filterType
       };
     case types.CREATE_NEW_TASK:
      if(action.ID != "new") {
        console.log(...state.tasks.filter((task) => {return task._id === action.ID}))
        newTask = {...state.tasks.filter((task) => {return task._id === action.ID})}[0];
      } else newTask = initialState.newTask
      return {
        ...state,
        createNewTask: !state.createNewTask,
        newTask: newTask
      };
     case types.UPDATE_NEW_TASK:
      newTask = {...state.newTask};
      switch(action.key) {
        case "name":
          newTask.name = action.value;
          break;
        case "endDate":
          newTask.end = new Date(new Date(action.value).getTime() + new Date(action.value).getTimezoneOffset() * 60000);
          break;
        case "description":
          newTask.description = action.value;
          break;
        case "createdBy":
          newTask.createdBy = action.value;
          break;
        default:
          newTask;
      }
      return {
        ...state,
        newTask: newTask
      }
     case types.DELETE_TASK:
      tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks = tasks.filter((task) => {return task._id !== action.taskID});
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
        tasks: tasks,
        newTask: initialState.newTask
      }
     case types.UPDATE_TASK:
      index = state.tasks.findIndex((task) => task._id === action.task._id);
      tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks = tasks.slice(0,index).concat(action.task, tasks.slice(index + 1, tasks.length));
      return {
        ...state,
        tasks: tasks
      };
     case types.UPDATE_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
      default:
       return state;
   }
 }
