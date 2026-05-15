import TaskTable from "../components/tasks/TaskTable";
import { tasks } from "../data/sampleTasks";

export default function App() {
  return (
    <main className="app">
      <h1>Task Bank</h1>
      <TaskTable tasks={tasks} />
    </main>
  );
}