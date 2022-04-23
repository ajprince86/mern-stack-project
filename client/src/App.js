import "./App.css";
import bootstrap from "bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/routes/Home";
import Users from "./components/routes/Users";
import Exercises from "./components/routes/Exercises";
import UserCreate from "./components/routes/UserCreate";
import User from "./components/routes/User";
import ExerciseCreate from "./components/routes/ExerciseCreate";
import UserUpdate from "./components/routes/UserUpdate";
// import UserEdit from "./components/routes/UserEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/create-user" element={<UserCreate />} />
        <Route path="/create-exercise" element={<ExerciseCreate />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/:id/edit" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
