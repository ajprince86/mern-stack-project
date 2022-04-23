import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
      const response = await axios("http://localhost:3000/api/users");
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
      <h3>Create New Exercise</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username:</label>
        <select
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
        <label>Workout:</label>
        <input
          required
          placeholder="Workout"
          defaultValue={exercise.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <label>Duration:</label>
        <input
          required
          placeholder="Duration"
          defaultValue={exercise.duration}
          name="duration"
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          name="date"
          placeholder="mm-dd-yyy"
          defaultValue={exercise.date}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
        <Link to={cancelPath}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default ExerciseForm;
