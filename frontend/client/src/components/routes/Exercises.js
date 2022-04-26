import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/exercises.css";
import Layout from "../shared/Layout.js";
import apiUrl from "../../apiConfig";

function Exercises() {
  const navigate = useNavigate();

  const [deleted, setDeleted] = useState(false);
  const [exercises, setExercises] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(`${apiUrl}/exercises`);
      console.log(response.data.exercises);
      setExercises(response.data.exercises);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const destroy = (id) => {
    axios({
      url: `${apiUrl}/exercises/${id}`,
      method: `DELETE`,
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  return (
    <Layout>
      <div className="exercises">
        <h1 className="new-font">Logged Exercises</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Duration(minutes)</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {(exercises || []).map((exercise, index) => {
                return (
                  <tr>
                    <td>{exercise.name}</td>
                    <td>{exercise.description}</td>
                    <td>{exercise.duration}</td>
                    <td>{exercise.date}</td>
                    <td>
                      <button
                        className="delete-exercise"
                        onClick={() => destroy(exercise._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br></br>
        <button className="back-home" onClick={() => navigate(`/`)}>
          Back to Home
        </button>
      </div>
    </Layout>
  );
}
export default Exercises;
