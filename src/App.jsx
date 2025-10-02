import { useEffect, useState } from "react";
import { TaskCard } from "./components/taskCard";
import { UserCard } from "./components/userCard";

import axios from "axios";

export function App() {
  const [todo, setTodo] = useState([]);
  const [users, setUsers] = useState([]);

  // state to update ho gaya lekin immediately re-render nhi hota isliye inside logs empty print ho rha
  // useEffect runs after first render and then it depends on its dependancy arr[]
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodo(response.data);
        console.log("todo list api inside useEffect", todo);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        console.log("users api inside useEffect", users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("users api outside useEffect: ", users);
  console.log("todo list api outside useEffect: ", todo);

  return (
    <>
      <p>Users API</p>
      {users.length === 0 && <h4>users Loading</h4>}

      <div className="grid grid-cols-4 gap-4 p-4">
        {users.slice(0, 4).map((user) => (
          <UserCard {...user}></UserCard>
        ))}
      </div>

      <p>Todo list API</p>
      {todo.length === 0 && <h4>todo list Loading</h4>}

      <div className="grid grid-cols-4 gap-4 p-4">
        {todo
          .filter((task) => !task.completed) // Keep only un-completed tasks
          .slice(0, 10)
          .map((task) => (
            <TaskCard {...task}></TaskCard>
          ))}
      </div>
    </>
  );
}
