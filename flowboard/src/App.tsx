// App.tsx

import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/home" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;