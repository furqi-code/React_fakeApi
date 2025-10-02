import { useEffect, useState } from "react";
import { TaskCard } from "./components/taskCard";
import { UserCard } from "./components/userCard";
import { PhotoCard } from "./components/photoCard";
import { OrderCard } from "./components/orderCard";
import { NotifyCard } from "./components/notificationCard";

import axios from "axios";

export function App() {
  const [todo, setTodo] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // state to update ho gaya lekin immediately re-render nhi hota isliye inside logs empty print ho rha
  // useEffect runs after first render and then it depends on its dependancy arr[]
  useEffect(() => {
    axios
      .get("https://fake-json-api.mock.beeceptor.com/notifications")
      .then((response) => {
        setNotifications(response.data);
        console.log("notification api inside useEffect", notifications);
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

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data);
        console.log("photos api inside useEffect", photos);
      })
      .catch((err) => {
        console.log(err);
      });

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
      .get("https://fakeapi.net/orders")
      .then((response) => {
        setOrders(response.data.data);
        console.log("online orders api inside useEffect", orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("users api outside useEffect: ", users);
  console.log("photos api outside useEffect: ", photos);
  console.log("todo list api outside useEffect: ", todo);
  console.log("online orders api outside useEffect", orders);
  console.log("notification api outside useEffect", notifications);

  return (
    <>
      <div className="p-4">
        <p>Notification API</p>
      </div>
      {notifications.length === 0 && <h4>Notifications Loading</h4>}
      <div className="grid grid-cols-4 gap-6 p-4">
        {notifications.map((notification) => (
          <NotifyCard {...notification}></NotifyCard>
        ))}
      </div>

      <div className="p-4">
        <p>online order API</p>
      </div>
      {orders.length === 0 && <h4>orders Loading</h4>}
      <div className="grid grid-cols-5 gap-4 p-4">
        {orders.map((order) => (
          <OrderCard {...order}></OrderCard>
        ))}
      </div>

      <div className="p-4">
        <p>Photos API</p>
      </div>
      {photos.length === 0 && <h4>Photos Loading</h4>}
      <div className="grid grid-cols-4 gap-8 p-4">
        {photos.slice(0, 7).map((photo) => (
          <PhotoCard {...photo}></PhotoCard>
        ))}
      </div>

      <div className="p-4">
        <p>Users API</p>
      </div>
      {users.length === 0 && <h4>users Loading</h4>}
      <div className="grid grid-cols-4 gap-4 p-4">
        {users.slice(0, 4).map((user) => (
          <UserCard {...user}></UserCard>
        ))}
      </div>

      <div className="p-4">
        <p>Todo list API</p>
      </div>
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
