import { Todo } from "src/structures/types/Todo";
import TodoList from "src/components/TodoList";
import TodoForm from "src/components/TodoForm";
import { useMemo, useState } from "react";

function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, priority: 0, description: "Buy groceries", done: null },
        { id: 2, priority: 0, description: "Walk the dog", done: new Date("2024-06-01T10:00:00") },
        { id: 3, priority: 0, description: "Read a book", done: null },
    ]);

    const [todo, setTodo] = useState<Todo>({ id: null, description: "", done: null, priority: 0 })

    const [search, setSearch] = useState("");

    const saveTodo = (todo: Todo) => {
        console.log('save', todo)
        if (!todo.id) {
            setTodos([...todos, todo]);
        } else {
            const idx = todos.findIndex(item => item.id === todo.id)
            todos[idx] = todo
            setTodos(todos);
        }

        setTodo({ id: null, description: "", done: null, priority: 0 });
    };

    const toggleDone = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, done: !!todo.done ? null : new Date() }
                    : todo
            )
        );
    };

    const removeTodo = (id: number) => {

        console.log('remo', id)
        setTodos(prev => prev.filter(item => item.id != id))

    };

    const editTodo = (item: Todo) => {
        setTodo(item);
    }

    // const filteredTodos = useMemo(() => {
    //     return todos.filter(t =>
    //         t.description.toLowerCase().includes(search.toLowerCase())
    //     );
    // }, [todos, search]);

    const filteredTodos = todos.filter(todo =>
        todo.description.toLowerCase().includes(search.toLowerCase())
    );




    return (
        <>
            <h1>Todo Page</h1>
            <input value={search} onInput={e => setSearch(e.currentTarget.value)} />
            <TodoForm todo={todo} onSave={saveTodo} />
            <TodoList todos={filteredTodos} onToggleDone={toggleDone} onEditTodo={editTodo} onRemoveTodo={removeTodo} />
        </>
    );

}

export default TodoPage;