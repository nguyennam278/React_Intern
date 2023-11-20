import React, { useEffect, useState } from "react";
import { loginAPI } from "../services/UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const handleLogin = async () => {
    if (!email && !password) {
      toast.error("Email/Password is missing");
      return;
    }
    setLoading(true);
    let res = await loginAPI(email, password);
    if (res && res.token) {
      login(email, res.token);
      navigate("/");
    } else {
      //
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoading(false);
  };
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div className="login-container col-sm-4 col-12">
      <div className="login-title">Log in</div>
      <div className="email">Email or Username (eve.holt@reqres.in)</div>
      <input
        type="text"
        placeholder="Email or username"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <div className="input-password">
        <input
          type={isShowPassword === true ? "text" : "password"}
          placeholder="Passworld"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <i
          className={
            isShowPassword === true
              ? "fa-solid fa-eye"
              : "fa-solid fa-eye-slash"
          }
          onClick={() => setIsShowPassword(!isShowPassword)}
        ></i>
      </div>
      <button
        className={email && password ? "active" : ""}
        disabled={email && password ? false : true}
        onClick={handleLogin}
      >
        {loading && <i class="fa-solid fa-circle-notch fa-spin"></i>} &nbsp;
        Login
      </button>
      <div className="go-back">
        <i className="fa-solid fa-arrow-left"></i> Go back
      </div>
    </div>
  );
};

export default Login;
