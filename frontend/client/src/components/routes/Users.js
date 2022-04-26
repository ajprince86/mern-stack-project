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
      <li className="vanilla" key={user._id}>
        <NavLink className="vanilla" to={`/users/${user._id}`}>
          {user.name}
        </NavLink>
      </li>
    );
  });

  return (
    <Layout>
      <h1 className="new-font">Our Current Users</h1>
      <div className="users">
        <p className="vanilla">Join our growing community</p>
        <button
          className="create-user"
          onClick={() => navigate(`/create-user`)}
        >
          Create User{" "}
        </button>
        <ul>{usersData}</ul>
        <br />
        <button className="back_home" onClick={() => navigate(`/`)}>
          Back Home
        </button>
      </div>
    </Layout>
  );
}
export default Users;
