// src/components/tasks/TaskTable.tsx

import type { Task } from "../../types/task";
import TaskBar from "./TaskBar";

type TaskTableProps = {
  tasks: Task[];
};

export default function TaskTable({ tasks }: TaskTableProps) {
  return (
    <section className="task-table">
      <div className="task-header">
        <div className="task-cell">Task</div>
        <div className="task-cell">Category</div>
        <div className="task-cell">Priority</div>
        <div className="task-cell">Energy</div>
        <div className="task-cell">Est. Time</div>
        <div className="task-cell">Status</div>
        <div className="task-cell">Tags</div>
        {/* <div className="task-cell"></div> */}
      </div>

      <div className="task-table-body">
        {tasks.map((task) => (
          <TaskBar key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}