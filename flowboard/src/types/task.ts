// src/types/task.ts

export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskEnergy = "low" | "medium" | "high";
export type TaskPriority = "low" | "medium" | "high";  

export type TaskCategory =
  | "school"
  | "work"
  | "personal"
  | "health"
  | "finance"
  | "chores"
  | "other";

export type TaskTag =
  | "urgent"
  | "important"
  | "quick"
  | "deep-work"
  | "follow-up"
  | "waiting"
  | "blocked";

export type Task = {
  id: string;
  title: string;
  category: TaskCategory;
  priority: TaskPriority;
  energy: TaskEnergy;
  estTime: number;
  status: TaskStatus;
  tag: TaskTag[];
};


