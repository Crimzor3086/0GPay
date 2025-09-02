import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";
import Receive from "./pages/Receive";
import History from "./pages/History";
import Settings from "./pages/Settings";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}>
      <Router>
        <nav className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0G Pay</div>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">Dashboard</Link>
            <Link to="/send" className="hover:text-blue-500 dark:hover:text-blue-300">Send</Link>
            <Link to="/receive" className="hover:text-blue-500 dark:hover:text-blue-300">Receive</Link>
            <Link to="/history" className="hover:text-blue-500 dark:hover:text-blue-300">History</Link>
            <Link to="/settings" className="hover:text-blue-500 dark:hover:text-blue-300">Settings</Link>
            <button
              className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-700 transition"
              onClick={() => setDarkMode((d) => !d)}
            >
              {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </nav>
        <main className="p-6 max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/send" element={<Send />} />
            <Route path="/receive" element={<Receive />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
