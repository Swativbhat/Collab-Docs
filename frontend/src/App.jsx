import React from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Editor  from "./components/Editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
