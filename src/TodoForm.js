import { useState } from "react";

function TodoForm({ addTodo }) {
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");
  const changeOnTodoDescription = (e) => {
    setTodoDescription(e.target.value);
  };
  const changeOnTodoDeadline = (e) => {
    setTodoDeadline(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: todoDescription,
      deadline: todoDeadline,
    };
    addTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="description">Todo description :</label>

      <input
        type="text"
        id="description"
        value={todoDescription}
        onChange={changeOnTodoDescription}
        minLength="4"
        maxLength="100"
        placeholder="Description"
        required
      />

      <label htmlFor="deadline">Deadline :</label>
      <input
        type={"date"}
        id="deadline"
        value={todoDeadline}
        onChange={changeOnTodoDeadline}
        required
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
}

export default TodoForm;
