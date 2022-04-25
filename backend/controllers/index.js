const User = require("../models/user");
const Exercise = require("../models/exercise");

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createExercise = async (req, res) => {
  try {
    const exercise = await new Exercise(req.body);
    await exercise.save();
    return res.status(201).json({
      exercise,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    return res.status(200).json({ exercises });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("User with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findById(id);
    if (exercise) {
      return res.status(200).json({ exercise });
    }
    return res
      .status(404)
      .send("Exercise with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!user) {
        res.status(500).send(`User not found!`);
      }
      return res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateExercise = (req, res) => {
  try {
    const { id } = req.params;
    Exercise.findByIdAndUpdate(id, req.body, { new: true }, (err, exercise) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!exercise) {
        res.status(500).send(`Exercise not found!`);
      }
      return res.status(200).json(exercise);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Exercise.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Exercise deleted");
    }
    throw new Error("Exercise not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = {
  createUser,
  createExercise,
  getAllUsers,
  getAllExercises,
  getUserById,
  getExerciseById,
  updateUser,
  updateExercise,
  deleteUser,
  deleteExercise,
};
