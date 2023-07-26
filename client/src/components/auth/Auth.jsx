import AuthLogin from "./AuthLogin";
import "./Auth.css";
import AuthRegister from "./AuthRegister";

// eslint-disable-next-line react/prop-types
export default function Auth({ login }) {
  return (
    <div className="Auth p-4">
      <div className="container">
        <div className="Auth-wrapper flex min-h-[100vh] items-center justify-center">
          {login ? <AuthLogin /> : <AuthRegister />}
        </div>
      </div>
    </div>
  );
}
