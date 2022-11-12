import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "../../components";
import { ITodo } from "./types";
import { StyledButton, StyledInputForm, StyledTasks } from "./styled";

export const Tasks = (): JSX.Element => {
  const [showInputForm, setShowInputForm] = useState<boolean>(true);
  const [todo, setTodo] = useState<ITodo>({
    id: "",
    name: "",
    minutes: 0,
    hours: 0,
    complexity: 1,
  });
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newID = uuidv4();
    const newTodo = { ...todo, id: newID };
    setTodoList([newTodo, ...todoList]);
    setShowInputForm(!showInputForm);
    setTodo({ id: "", name: "", minutes: 0, hours: 0, complexity: 1 });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <StyledTasks>
      {showInputForm ? (
        <StyledButton onClick={() => setShowInputForm(!showInputForm)}>
          New task
        </StyledButton>
      ) : (
        <div>
          <StyledInputForm className="todo-form" onSubmit={handleSubmit}>
            <div className="input__field">
              <label htmlFor="name">Task Name: </label>
              <input
                name="name"
                type="text"
                className="todo"
                required
                value={todo.name}
                onChange={changeHandler}
              />
            </div>
            <div className="input__field">
              <label htmlFor="hours">Hours: </label>
              <input
                name="hours"
                type="number"
                className="hours"
                min="0"
                value={todo.hours}
                onChange={changeHandler}
              />
            </div>
            <div className="input__field">
              <label htmlFor="minutes">Minutes: </label>
              <input
                name="minutes"
                type="number"
                className="minutes"
                min="0"
                max="59"
                value={todo.minutes}
                onChange={changeHandler}
              />
            </div>
            <div className="input__field">
              <label htmlFor="complexity">Complexity (1-4): </label>
              <input
                name="complexity"
                type="number"
                className="complexity"
                min="1"
                max="4"
                value={todo.complexity}
                onChange={changeHandler}
              />
            </div>
            <button className="submit-btn" type="submit">
              Add to List
            </button>
          </StyledInputForm>
        </div>
      )}
      <TodoList todoList={todoList} />
    </StyledTasks>
  );
};
