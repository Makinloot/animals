import { auth } from "../../../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

// create user
async function registerUser(req, res) {
  try {
    const { email, password } = req.body;
    await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).send(`User successfully created`);
  } catch (error) {
    res.status(400).send(`bad request: ${error}`);
  }
}

export { registerUser };
