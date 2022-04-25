import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../shared/Layout";
import axios from "axios";
import UserForm from "../shared/UserForm";
import apiUrl from "../../apiConfig";

function UserCreate() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    current_height: "",
    current_weight: "",
  });

  const [createdUser, setCreatedUser] = useState(null);
  const [inches, setInches] = useState("");

  const handleChangeInches = (event) => {
    const data = event.target.value + "";
    setInches(data);
    console.log(inches);
    const updatedField = {
      current_height: user.current_height + "'" + data,
    };
    console.log(updatedField);
    const editedUser = Object.assign(user, updatedField);
    setUser(editedUser);
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    const updatedField = { [event.target.name]: event.target.value.toString() };
    console.log(updatedField);
    const editedUser = Object.assign(user, updatedField);
    setUser(editedUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //If the entry is created in the database, save the response data in the state
    axios({
      url: `${apiUrl}/users`,
      //Added /users after apiUrl to fix issues with update
      method: `POST`,
      data: user,
    })
      .then((res) => setCreatedUser(res.data.user))
      .catch(console.error);
  };
  useEffect(() => {
    if (createdUser) {
      return navigate(`/users`);
    }
  }, [createdUser, navigate]);

  return (
    <Layout>
      <h1 className="new-font">User Registration</h1>
      <UserForm
        user={user}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        handleChangeInches={(e) => handleChangeInches(e)}
        cancelPath="/"
      />
    </Layout>
  );
}

export default UserCreate;
