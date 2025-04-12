import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleonclick = () => {
        navigate("/editor");
    }

  return (
    <div>
          <h1>Dashboard</h1>

          <button onClick={handleonclick}>Create new</button>
    </div>
  );
}

export default Dashboard;
