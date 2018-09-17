const STORAGE_KEY = 'tdoo-react-v0.1';

const fetch = () => {
    let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    todos.forEach((todo, index) => {
        todo.id = index;
    })
    // let uid =  Math.max.apply(Math, todos.map((item) => { return item.id; }));
    let ids = todos.map((item) => item.id);
    let idMax = ids.length > 0 ? Math.max(...ids) : 0;
    return {
        todos: todos,
        uid: idMax
    };
}

const save = (todos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

export { fetch, save };