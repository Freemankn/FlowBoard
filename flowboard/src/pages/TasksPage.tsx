import type { Task, TaskStatus } from "../types/task"


function TaskItem({ task }: { task: Task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.status}</p>
    </div>
  );
}

export default function TaskList() {
  const tasks: Task[] = [
    { id: "1", title: "Finish dashboard UI", status: "todo" },
    { id: "2", title: "Create task bank page", status: "in-progress" },
    { id: "3", title: "Set up notifications", status: "todo" },
  ];

  return (
    <section>
      <h2>Tasks</h2>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}