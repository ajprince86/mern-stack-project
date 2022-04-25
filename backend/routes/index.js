const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
router.post("/users", controllers.createUser); //1:13 into video
router.post("/exercises", controllers.createExercise);
router.get("/users", controllers.getAllUsers);
router.get("/exercises", controllers.getAllExercises);
router.get("/users/:id", controllers.getUserById);
router.get("/exercises/:id", controllers.getExerciseById);
router.put("/users/:id", controllers.updateUser);
router.put("/exercises/:id", controllers.updateExercise);
router.delete("/users/:id", controllers.deleteUser);
router.delete("/exercises/:id", controllers.deleteExercise);

module.exports = router; //1:15
