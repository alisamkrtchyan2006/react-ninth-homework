import "./App.css"
import React, { useState } from "react";
import { UserForm } from "./components/userform";
import { UserList } from "./components/userlist";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    toast.success("User added successfully!");
  };

  return (
    <div className="main">
      <h1>User Manager</h1>
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} />
      <ToastContainer />
    </div>
  );
}
