  const initialState = {
    todos : []
  };
  
  function rootReducer(state = initialState, action) {
    if(action.type === 'TODO_LIST') {
      console.log(state);
      state.todos = action.payload
    } else if(action.type === 'ADD_TODO_LIST') {
      state.todos.push(action.payload);
    }
    return state;
  };
  
  export default rootReducer;