// src/components/tasks/TaskBar.tsx

import type { Task } from "../../types/task";
import { useState } from "react";
import TaskCheckbox from "./TaskCheckBox";

type TaskBarProps = {
  task: Task;
};

export default function TaskBar({ task }: TaskBarProps) {
    const [checked, setChecked] = useState(task.status === "done");
    
  return (
    <div className="task-row">
      <div className="task-cell task-title-cell">
        <TaskCheckbox
            checked={checked}
            onChange={setChecked}
        />
        
        <span className="task-title">{task.title}</span>
      </div>

      <div className="task-cell">{task.category}</div>

      <div className="task-cell">
        <span className={`priority priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>

      <div className="task-cell">
        <span className={`energy energy-${task.energy}`}>
          {task.energy}
        </span>
      </div>

      <div className="task-cell">{task.estTime} min</div>

      <div className="task-cell">{task.status}</div>

      <div className="task-cell task-tags">
        {task.tag.map((tag) => (
          <span key={tag} className="task-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="task-cell task-actions">
        {/* <button className="icon-button">☆</button> // Star
        <button className="task-button">Add to Today</button> // Add to Today Button
        
        <button className="icon-button">⋮</button>  Three dots */}
      </div>
    </div>
  );
}