import { auth } from "../../../config/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

// create user
async function loginUser(req, res) {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    console.log(req.body);
    await signInWithEmailAndPassword(auth, email, password);
    res.status(200).send(`user succesfully logged in`);
  } catch (error) {
    res.status(400).send(`bad request: ${error}`);
  }
}

export { loginUser };
