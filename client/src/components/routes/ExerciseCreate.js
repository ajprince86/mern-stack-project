import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ExerciseForm from "../shared/ExerciseForm";
import Layout from "../shared/Layout";
import apiUrl from "../../apiConfig";

function ExerciseCreate() {
  const navigate = useNavigate();
  const [exercise, setExercise] = useState({
    name: "",
    description: "",
    duration: "",
    date: "",
  });
  const [createdExercise, setCreatedExercise] = useState(null);

  const handleChange = (event) => {
    console.log(event);
    // const updatedField = event.target.name
    //   ? { [event.target.name]: event.target.value }
    //   : { date: event.target.value };
    const updatedField = { [event.target.name]: event.target.value };
    console.log(updatedField);
    const editedExercise = Object.assign(exercise, updatedField);
    setExercise(editedExercise);
  };
  useEffect(() => {
    console.log(exercise);
  }, [exercise]);

  const handleChangeSelect = (event) => {
    console.log(event);
    const updatedField = { name: event.target.value };
    console.log(updatedField);
    const editedExercise = Object.assign(exercise, updatedField);
    setExercise(editedExercise);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    //If the entry is created in the database, save the response data in the state
    axios({
      url: `${apiUrl}/exercises`,
      method: `POST`,
      data: exercise,
    })
      .then((res) => setCreatedExercise(res.data.exercise))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdExercise) {
      console.log("Created");
      return navigate("/exercises");
    }
  }, [createdExercise, navigate]);

  return (
    <Layout>
      <h1>Log your Workout</h1>
      <ExerciseForm
        exercise={exercise}
        handleChange={(e) => handleChange(e)}
        handleChangeSelect={(e) => handleChangeSelect(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath="/"
      />
    </Layout>
  );
}

export default ExerciseCreate;
