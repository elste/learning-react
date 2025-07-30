function TodoItem({ todo, onToggleDone, onEditTodo, onRemoveTodo }) {


    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <input type="checkbox" checked={!!todo.done} onChange={() => onToggleDone(todo.id)} />
            <p>{todo.description}</p>

            <button onClick={() => onEditTodo(todo)}>Edit</button>
            <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </div>
    );

}

export default TodoItem;