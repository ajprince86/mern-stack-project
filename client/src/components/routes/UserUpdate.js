import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../shared/UserForm";
import Layout from "../shared/Layout";
import axios from "axios";

function UserUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inches, setInches] = useState("");
  const [updated, setUpdated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    current_height: "",
    current_weight: "",
  });

  const handleChangeInches = (event) => {
    setInches(event.target.value + "");
    console.log(inches);
    const updatedField = {
      current_height: user.current_height + "'" + event.target.value,
    };
    const editedUser = Object.assign(user, updatedField);
    setUser(editedUser);
  };

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedUser = Object.assign(user, updatedField);
    setUser(editedUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/api/users/${id}`,
      method: "PUT",
      data: user,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3000/api/users/${id}`);
        console.log(response);
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (updated) {
      return navigate(`/users/${id}`);
    }
  });

  return (
    <Layout>
      <UserForm
        user={user}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        handleChangeInches={(e) => handleChangeInches(e)}
        cancelPath={`/users/${id}`}
        // cancelPath={`/`}
      />
    </Layout>
  );
}

export default UserUpdate;
