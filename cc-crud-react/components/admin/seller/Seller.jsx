import axios from "axios";
import React, { useEffect, useState } from "react";
import "./seller.css";
import apiClient from "../../../src/utils/api-client";

const Sellers = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  // call get api-
  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await apiClient.get("/users");
      setUser(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  // call post api-
  const addUser = async () => {
    try {
      const newUser = {
        name,
        id: user.length + 1
      };
      const res = await apiClient.post("/users", newUser);
      setUser([res.data, ...user]);
      setName("");
    } catch (err) {
      setError(err.message);
      setUser(user)
    }
  };
  // call delete api- 
  const deleteUser = async (id) => {
    try {
      setUser(user.filter((item) => item.id !== id));
      await apiClient.delete(`/users/${id}`);
    } catch (err) {
      setUser(err.message);
      setUser(user);
    }
  }
  // call patch api-
  const updateUser = async (selectedUser) => {
    const updateUserData = {
      ...selectedUser,
      name: selectedUser.name + " updated..",
    };
    try {
      setUser(user.map((item) => item.id === selectedUser.id ? updateUserData : item));
      await apiClient.patch(`/users/${selectedUser.id}`,
        updateUserData
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Admin seller page</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addUser}>Add User</button>
      {loading && <h3 className="loading">Loading data...</h3>}
      {error && <em className="error">{error}</em>}
      <table className="custom-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => updateUser(item)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Sellers;
