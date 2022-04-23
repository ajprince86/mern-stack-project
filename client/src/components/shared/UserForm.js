import { Link } from "react-router-dom";

const UserForm = ({
  user,
  handleSubmit,
  handleChange,
  cancelPath,
  handleChangeInches,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* Form was implented on Apr 6 35min in */}
      <h3>User</h3>
      <input
        required
        placeholder="username"
        defaultValue={user.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <h3>Feet</h3>
      <input
        required
        type="number"
        placeholder="Feet"
        defaultValue={user.current_height}
        name="current_height"
        maxLength="7"
        onChange={(e) => handleChange(e)}
      />
      <h3>Inches</h3>
      <input
        required
        type="number"
        max="11"
        min="0"
        placeholder="inches"
        defaultValue={user.current_height}
        name="inches"
        onChange={(e) => handleChangeInches(e)}
      />
      <h3>Weight: Pounds</h3>
      <input
        required
        type="text"
        placeholder="weight"
        defaultValue={user.current_weight}
        name="current_weight"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};

export default UserForm;
