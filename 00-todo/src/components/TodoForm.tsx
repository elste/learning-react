import { useState, useEffect } from 'react';

function TodoForm({ todo, onSave }) {
    const [formData, setFormData] = useState({
        description: '',
        priority: 0,
    });

    useEffect(() => {
        setFormData({
            description: todo.description || '',
            priority: todo.priority ?? 0,
        });
    }, [todo]);

    const handleChange = (e) => {
        c
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'priority' ? Number(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...todo,
            ...formData,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                >
                    <option value={0}>Low</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                </select>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}


export default TodoForm