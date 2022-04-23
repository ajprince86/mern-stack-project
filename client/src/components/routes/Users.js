import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/users.css";
import Layout from "../shared/Layout.js";
import apiUrl from "../../apiConfig";

function Users() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(`${apiUrl}/users`);
      console.log(response.data.users);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const usersData = users.map((user) => {
    return (
      <li key={user._id}>
        <NavLink to={`/users/${user._id}`}>{user.name}</NavLink>
      </li>
    );
  });

  return (
    <div>
      <Layout>
        <h1>Our Current Users</h1>
        <p>Join our growing community</p>
        <button onClick={() => navigate(`/create-user`)}>Create User</button>

        <ul>{usersData}</ul>
        <button onClick={() => navigate(`/`)}>Back to Home</button>
      </Layout>
    </div>
  );
}
export default Users;
