// src/App.tsx

import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Homepage from "./pages/Homepage";



function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<h1>Routing works</h1>} />
//     </Routes>
//   );
// }

// export default App;