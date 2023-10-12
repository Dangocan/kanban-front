import React from "react";
import api from "../../services/api";
import { Button, Input } from "../../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import { changeUserData } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

function SignUpPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwtToken = useLoaderData();

  const handleLogin = () => {
    api
      .post("/auth/login", { email, password })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(
            changeUserData({
              name: response.data.user.name,
              email: response.data.user.email,
              _id: response.data.user._id,
              token: response.data.jwtToken,
            })
          );
          localStorage.setItem("jwtToken", response.data.jwtToken);
          navigate("/boards");
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  return (
    <div className="debbug-2 flex flex-col w-2/3 h-2/3 justify-center">
      <div className="debbug flex flex-col">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Login" onClick={() => handleLogin()} />
        <Button
          title="Create account"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        />
      </div>
    </div>
  );
}

export default SignUpPage;
