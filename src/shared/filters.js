const all = (todos) => {
    return todos;
}

const active = (todos) => {
    return todos.filter((todo) => {
        return !todo.completed;
    })
}
const completed = (todos) => {
    return todos.filter((todo) => {
        return todo.completed;
    })
}

const pluralize = (n) => {
    return n === 1 ? 'item' : 'items'
}


export { all, active, completed, pluralize };
