// src/data/sampleTasks.ts

import type { Task } from "../types/task";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Finish dashboard UI",
    category: "work",
    priority: "high",
    energy: "high",
    estTime: 90,
    status: "todo",
    tag: ["important", "deep-work"],
  },
  {
    id: "2",
    title: "Create task bank page",
    category: "work",
    priority: "high",
    energy: "medium",
    estTime: 120,
    status: "in-progress",
    tag: ["important"],
  },
  {
    id: "3",
    title: "Set up notifications",
    category: "work",
    priority: "medium",
    energy: "high",
    estTime: 75,
    status: "todo",
    tag: ["follow-up", "blocked"],
  },
  {
    id: "3",
    title: "Set up notifications",
    category: "work",
    priority: "medium",
    energy: "high",
    estTime: 75,
    status: "done",
    tag: ["follow-up", "blocked"],
  },
];