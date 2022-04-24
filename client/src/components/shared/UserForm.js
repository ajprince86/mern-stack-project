import { Link } from "react-router-dom";
import "../css/userForm.css";

const UserForm = ({
  user,
  handleSubmit,
  handleChange,
  cancelPath,
  handleChangeInches,
}) => {
  return (
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
  );
};

export default UserForm;

//  <form onSubmit={(e) => handleSubmit(e)}>
//       {/* Form was implented on Apr 6 35min in */}
//       <h3>User</h3>
//       <input
//         required
//         placeholder="username"
//         defaultValue={user.name}
//         name="name"
//         onChange={(e) => handleChange(e)}
//       />
//       <h3>Feet</h3>
//       <input
//         required
//         type="number"
//         placeholder="Feet"
//         defaultValue={user.current_height}
//         name="current_height"
//         maxLength="7"
//         onChange={(e) => handleChange(e)}
//       />
//       <h3>Inches</h3>
//       <input
//         required
//         type="number"
//         max="11"
//         min="0"
//         placeholder="inches"
//         defaultValue={user.current_height}
//         name="inches"
//         onChange={(e) => handleChangeInches(e)}
//       />
//       <h3>Weight: Pounds</h3>
//       <input
//         required
//         type="number"
//         placeholder="weight"
//         defaultValue={user.current_weight}
//         name="current_weight"
//         onChange={(e) => handleChange(e)}
//       />
//       <br />
//       <br />
//       <button type="submit">Submit</button>
//       <Link to={cancelPath}>
//         <button>Cancel</button>
//       </Link>
//     </form> }
