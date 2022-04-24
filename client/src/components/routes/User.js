import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import apiUrl from "../../apiConfig";

function User() {
  const [user, setUser] = useState({});
  const [deleted, setDeleted] = useState(false);
  const [weight, setWeight] = useState(0);
  const [foot, setFoot] = useState(0);
  const [inches, setInches] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [status, setStatus] = useState("");

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${apiUrl}/users/${id}`);
        console.log(response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]); // <==== MIGHT NEED TO REMOVE id FROM ARRAY

  useEffect(() => {
    if (!user) {
      return <p>Loading...</p>;
    }
  }, [user]);

  const destroy = () => {
    axios({
      url: `${apiUrl}/users/${id}`,
      method: `DELETE`,
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (deleted) {
      return navigate("/users");
    }
  }, [deleted, navigate]);

  const weightChange = (event) => {
    console.log(event.target.value);
    setWeight(event.target.value);
  };

  const heightChangeFoot = (event) => {
    console.log(event.target.value * 12);
    const newFoot = event.target.value * 12;
    setFoot(newFoot);
  };
  const heightChangeInches = (event) => {
    console.log(event.target.value);
    setInches(event.target.value);
  };

  const bmiCalculator = () => {
    // console.log(foot, typeof inches, typeof weight);
    let totalInches = parseInt(foot) + parseInt(inches);
    let newHeight = Math.pow(totalInches, 2);
    //newHeight = newHeight * newHeight;
    let myBmi = Math.round((weight / newHeight) * 703);
    setBMI(myBmi);
  };

  useEffect(() => {
    const statusForbmi = () => {
      if (bmi === 0) {
        setStatus("");
      } else if (bmi < 18) {
        setStatus("SEVERLY UNDERWEIGHT");
      } else if (bmi > 18 && bmi <= 21) {
        setStatus("Underweight");
      } else if (bmi > 21 && bmi <= 28) {
        setStatus("Normal");
      } else if (bmi > 28 && bmi <= 32) {
        setStatus("Overweight");
      } else if (bmi > 32 && bmi <= 37) {
        setStatus("Moderatley Overweight");
      } else if (bmi > 37 && bmi < 42) {
        setStatus("Severly Obese");
      } else if (bmi > 42) {
        setStatus("MORBIDLY OBESE");
      }
    };
    statusForbmi();
  }, [bmi]);

  return (
    <Layout>
      <h2>{user.name}</h2>
      <h3>Height: {user.current_height}</h3>
      <h3>Weight: {user.current_weight}</h3>
      <h3>Please Enter Your Current Height and Weight</h3>
      <h2>Feet:</h2>
      <input max="7" min="1" type="number" onChange={heightChangeFoot} />
      <br />
      <h2>Inches:</h2>
      <input
        type="number"
        max="11"
        min="1"
        placeholder="inches"
        onChange={heightChangeInches}
      />
      <h2>Weight:</h2>
      <input type="number" placeholder="weight" onChange={weightChange} />
      <br />
      <br />
      <br />
      <button onClick={bmiCalculator}>Whats My Current BMI</button>
      <h2>{bmi}</h2>
      <p>Based on your height weight you are</p>
      <p>{status}</p>
      <p>
        {bmi > 28
          ? `Based on our calculations you should lose about ${
              Math.round(bmi - 28) * 5
            } pounds to be in good shape `
          : `You are in great shape, keep up the good work!!`}
      </p>
      <br />
      <button onClick={() => destroy()}>Delete User</button>
      <NavLink to={`/users/${id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <NavLink to="/users">
        <button>Back to all Users</button>
      </NavLink>
    </Layout>
  );
}

export default User;
