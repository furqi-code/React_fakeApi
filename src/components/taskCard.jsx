export function TaskCard({...task}) {
  return (
    <div className="px-4 py-2 border-2 bg-red-200" key={task.id}>
      <h4>User id: {task.userId}</h4>
      <h4>Task id: {task.id}</h4>
      <h4>Title: {task.title}</h4>
      <h4>Completed: {task.completed.toString()}</h4>
    </div>
  );
}
