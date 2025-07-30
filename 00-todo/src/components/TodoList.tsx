import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleDone, onEditTodo, onRemoveTodo }) {
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                {
                    todos.map(todo => (
                        <div key={todo.id}>
                            <TodoItem todo={todo} onToggleDone={onToggleDone} onEditTodo={onEditTodo} onRemoveTodo={onRemoveTodo} />
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default TodoList;