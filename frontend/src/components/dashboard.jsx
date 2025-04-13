import React, { useState } from "react";
import { Plus } from "lucide-react";

function Dashboard() {
  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(1);

  const handleCreateFile = () => {
    const newFile = {
      id: fileCount,
      name: `Document ${fileCount}`,
      createdAt: new Date().toLocaleString(),
    };
    setFiles([newFile, ...files]);
    setFileCount(fileCount + 1);
  };

  const handleLogout = () => {
    alert("Logged out");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          {" "}
          Logout{" "}
        </button>
      </div>

      <hr></hr>
      <br></br>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div
          onClick={handleCreateFile}
          className="flex items-center justify-center border-2 border-dashed border-blue-400 rounded-lg h-36 cursor-pointer hover:bg-blue-50 transition"
        >
          <Plus className="w-8 h-8 text-blue-600" />
        </div>

        {files.map((file) => (
          <div
            key={file.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer flex flex-col justify-center items-center h-36 text-center border border-gray-200"
          >
            <div className="text-lg font-medium">{file.name}</div>
            <div className="text-sm text-gray-500">{file.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
