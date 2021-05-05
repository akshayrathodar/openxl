  import {addTodos , getProduct} from '../Apis/callApis';

  const initialState = {
    todos : []
  };
  
  function rootReducer(state = initialState, action) {
    if(action.type === 'TODO_LIST') {
        
        state.todos.push(action.payload)
        console.log(state);
    } else if(action.type === 'ADD_TODO_LIST') {
      // let FD = new FormData();
      // FD.append('todotext',action.payload.todo);
      // FD.append('status',action.payload.checked);
      let data = {'todotext':action.payload.todo,'status':action.payload.checked};
      addTodos(data).then((res) => {
        let data = {'id':res.data.message.data,'todotext':action.payload.todo,'status':1};
        state.todos.push(data);
      }).catch((err) => {
        console.log(err);
      });
      
    }
    console.log(state);
    return state;
  };
  
  export default rootReducer;