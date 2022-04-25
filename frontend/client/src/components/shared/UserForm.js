import { Link } from "react-router-dom";
import "../css/userForm.css";
import image from "../images/workout_2.png";
import image2 from "../images/workout_6.png";

const UserForm = ({
  user,
  handleSubmit,
  handleChange,
  cancelPath,
  handleChangeInches,
}) => {
  return (
    <div>
      <img className="img-left" src={image} alt="pic" />
      <img className="img-right" src={image2} alt="pic" />
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="title">Welcome to the journey</div>
        <div className="subtitle">Fill out to register!</div>
        <div className="input-container ic1">
          <input
            id="username"
            defaultValue={user.name}
            className="input"
            name="name"
            type="text"
            placeholder=" "
            onChange={(e) => handleChange(e)}
          />
          <div className="cut">Username:</div>
          <label className="placeholder"></label>
        </div>
        <div className="input-container ic1">
          <input
            required
            name="current_height"
            defaultValue={user.current_height}
            id="feet"
            className="input"
            type="number"
            placeholder=" "
            maxLength="7"
            onChange={(e) => handleChange(e)}
          />
          <div className="cut">Foot</div>
          <label className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            required
            name="inches"
            defaultValue={user.current_height}
            id="inches"
            className="input"
            type="number"
            placeholder=" "
            max="11"
            min="0"
            onChange={(e) => handleChangeInches(e)}
          />
          <div className="cut">Inches</div>
          <label className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            required
            name="current_weight"
            defaultValue={user.current_weight}
            id="weight"
            className="input"
            type="number"
            placeholder=" "
            onChange={(e) => handleChange(e)}
          />
          <div className="cut">Weight</div>
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

export default UserForm;
