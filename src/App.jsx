import { useEffect, useState } from "react";
import { TaskCard } from "./components/taskCard";
import { UserCard } from "./components/userCard";
import { PhotoCard } from "./components/photoCard";
import { OrderCard } from "./components/orderCard";
import { NotifyCard } from "./components/notificationCard";
import axios from "axios";

export function App() {
  const [api, setApi] = useState({
    todo: [],
    users: [],
    photos: [],
    orders: [],
    notifications: [],
  });

  // state to update ho gaya lekin immediately re-render nhi hota isliye inside logs empty print ho rha
  // useEffect runs after first render and then it depends on its dependancy arr[]
  useEffect(() => {
    axios
      .get("https://fake-json-api.mock.beeceptor.com/notifications")
      .then((response) => {
        setApi((prevState) => {
          return {
            ...prevState,
            notifications: response.data,
          };
        });
        console.log("notification api inside useEffect", api.notifications);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setApi((prevState) => {
          return {
            ...prevState,
            users: response.data,
          };
        });
        console.log("users api inside useEffect: ", api.users);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setApi((prevState) => {
          return {
            ...prevState,
            photos: response.data,
          };
        });
        console.log("photos api inside useEffect: ", api.photos);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setApi((prevState) => {
          return {
            ...prevState,
            todo: response.data,
          };
        });
        console.log("todo list api inside useEffect: ", api.todo);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://fakeapi.net/orders")
      .then((response) => {
        setApi((prevState) => {
          return {
            ...prevState,
            orders: response.data.data,
          };
        });
        console.log("online orders api inside useEffect", api.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("users api outside useEffect: ", api.users);
  console.log("photos api outside useEffect: ", api.photos);
  console.log("todo list api outside useEffect: ", api.todo);
  console.log("online orders api outside useEffect", api.orders);
  console.log("notification api outside useEffect", api.notifications);

  return (
    <>
      <div className="p-4">
        <p>Notification API</p>
      </div>
      {api.notifications.length === 0 && <h4>Notifications Loading</h4>}
      <div className="grid grid-cols-4 gap-6 p-4">
        {api.notifications.map((notification) => (
          <NotifyCard {...notification}></NotifyCard>
        ))}
      </div>

      <div className="p-4">
        <p>online order API</p>
      </div>
      {api.orders.length === 0 && <h4>orders Loading</h4>}
      <div className="grid grid-cols-5 gap-4 p-4">
        {api.orders.map((order) => (
          <OrderCard {...order}></OrderCard>
        ))}
      </div>

      <div className="p-4">
        <p>Photos API</p>
      </div>
      {api.photos.length === 0 && <h4>Photos Loading</h4>}
      <div className="grid grid-cols-4 gap-8 p-4">
        {api.photos.slice(0, 7).map((photo) => (
          <PhotoCard {...photo}></PhotoCard>
        ))}
      </div>

      <div className="p-4">
        <p>Users API</p>
      </div>
      {api.users.length === 0 && <h4>users Loading</h4>}
      <div className="grid grid-cols-4 gap-4 p-4">
        {api.users.slice(0, 4).map((user) => (
          <UserCard {...user}></UserCard>
        ))}
      </div>

      <div className="p-4">
        <p>Todo list API</p>
      </div>
      {api.todo.length === 0 && <h4>todo list Loading</h4>}
      <div className="grid grid-cols-4 gap-4 p-4">
        {api.todo
          .filter((task) => !task.completed) // Keep only un-completed tasks
          .slice(0, 10)
          .map((task) => (
            <TaskCard {...task}></TaskCard>
          ))}
      </div>
    </>
  );
}
