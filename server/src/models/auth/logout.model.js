import { auth } from "../../../config/firebase.js";
import { signOut } from "firebase/auth";

async function logoutUser(req, res) {
  try {
    await signOut(auth);
    res.status(200).send(`user successfully logged out`);
  } catch (error) {
    res.status(400).send(`bad request: ${error}`);
  }
}

export { logoutUser };
