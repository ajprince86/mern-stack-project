import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import "../css/exerciseForm.css";
import image from "../images/workout_3.png";
import image2 from "../images/workout_7.png";

const ExerciseForm = ({
  exercise,
  handleSubmit,
  handleChange,
  cancelPath,
  handleChangeSelect,
}) => {
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

  return (
    <div>
      <img className="img-left" src={image} alt="pic" />
      <img className="img-right" src={image2} alt="pic" />
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* <div className="title">Progress not perfection</div> */}
        <div className="subtitle">Progress not perfection</div>
        <div className="input-container ic1">
          <select
            className="input"
            required
            value={users.name}
            onChange={(e) => handleChangeSelect(e)}
          >
            <option></option>
            {users.map((user, key) => {
              return (
                <option value={user.name} key={key}>
                  {user.name}
                </option>
              );
            })}
          </select>
          <div className="cut">Username:</div>
          <label className="placeholder"></label>
        </div>

        <option></option>
        <div className="input-container ic1">
          <input
            required
            placeholder=" "
            name="description"
            defaultValue={exercise.description}
            id="description"
            className="input"
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <div className="cut">Workout:</div>
          <label className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            required
            name="duration"
            defaultValue={exercise.duration}
            id="duration"
            className="input"
            type="number"
            placeholder=" "
            onChange={(e) => handleChange(e)}
          />
          <div className="cut">Duration</div>
          <label className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            required
            name="date"
            defaultValue={exercise.date}
            id="date"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => handleChange(e)}
          />
          <div className="cut">Date</div>
          <label className="placeholder"></label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
        <Link to={cancelPath}>
          <button className="cancel">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default ExerciseForm;
