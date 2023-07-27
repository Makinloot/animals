import AuthLogin from "./AuthLogin";
import "./Auth.css";
import AuthRegister from "./AuthRegister";

// eslint-disable-next-line react/prop-types
export default function Auth({ login }) {
  return (
    <div className="Auth ">
      <div className="container">
        <div className="Auth-wrapper flex min-h-[100vh] items-center justify-center text-neutral-content">
          {login ? <AuthLogin /> : <AuthRegister />}
        </div>
      </div>
    </div>
  );
}
