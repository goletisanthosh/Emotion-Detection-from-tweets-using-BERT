// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
//       <Home />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/analyze" element={<Home />} />
    </Routes>
  );
}

export default App;
