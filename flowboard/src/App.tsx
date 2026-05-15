// src/App.tsx

import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Homepage from "./pages/Homepage";
import TasksPage from "./pages/TasksPage";



function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
}

export default App;