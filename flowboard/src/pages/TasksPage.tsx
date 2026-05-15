import type { Task, TaskStatus } from "../types/task"



function TaskBar({ task }: { task: Task }) {
  return (
    <div className="task-bar">
      <div>
        <h3>{task.title}</h3>
      </div>


      <span>{task.status}</span>
    </div>
  );
}

export default function TaskList() {
  const tasks: Task[] = [
  {
    id: "1",
    title: "Finish dashboard UI",
    category: "work",
    priority: "high",
    enegry: "high",
    estTime: 90,
    status: "todo",
    tag: ["important", "deep-work"],
  },
  {
    id: "2",
    title: "Create task bank page",
    category: "work",
    priority: "high",
    enegry: "medium",
    estTime: 120,
    status: "in-progress",
    tag: ["important", "deep-work"],
  },
  {
    id: "3",
    title: "Set up notifications",
    category: "work",
    priority: "medium",
    enegry: "high",
    estTime: 75,
    status: "todo",
    tag: ["follow-up", "blocked"],
  },
  {
    id: "4",
    title: "Review React Router layout structure",
    category: "school",
    priority: "medium",
    enegry: "medium",
    estTime: 45,
    status: "todo",
    tag: ["important", "quick"],
  },
  {
    id: "5",
    title: "Clean desk and organize workspace",
    category: "chores",
    priority: "low",
    enegry: "low",
    estTime: 20,
    status: "done",
    tag: ["quick"],
  },
  {
    id: "6",
    title: "Plan weekly study schedule",
    category: "school",
    priority: "medium",
    enegry: "medium",
    estTime: 30,
    status: "todo",
    tag: ["important"],
  },
  {
    id: "7",
    title: "Reply to project teammate",
    category: "work",
    priority: "medium",
    enegry: "low",
    estTime: 10,
    status: "todo",
    tag: ["quick", "follow-up"],
  },
  {
    id: "8",
    title: "Update monthly budget",
    category: "finance",
    priority: "medium",
    enegry: "medium",
    estTime: 40,
    status: "todo",
    tag: ["important"],
  },
  {
    id: "9",
    title: "Go for a 30 minute walk",
    category: "health",
    priority: "low",
    enegry: "low",
    estTime: 30,
    status: "todo",
    tag: ["quick"],
  },
  {
    id: "10",
    title: "Fix task card styling",
    category: "work",
    priority: "high",
    enegry: "medium",
    estTime: 60,
    status: "in-progress",
    tag: ["urgent", "important"],
  },
];

  return (
    <section>
      <h2>Tasks</h2>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskBar key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}