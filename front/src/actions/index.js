
export function todoList(payload) {
    return { type: "TODO_LIST", payload }
};

export function addtodoList(payload) {
    console.log(payload);
    return { type: "ADD_TODO_LIST", payload }
};