import React from "react";
import api from "../../services/api";
import { Button, Input } from "../../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUserData } from "../../slices/userSlice";

function SignUpPage() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwtToken = useLoaderData();

  const handleRegister = () => {
    api
      .post("/auth/register", { name, email, password })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          localStorage.setItem("jwtToken", response.data.jwtToken);
          dispatch(
            changeUserData({
              name: response.data.user.name,
              email: response.data.user.email,
              _id: response.data.user._id,
              token: response.data.jwtToken,
            })
          );
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
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button title="Create account" onClick={() => handleRegister()} />
      </div>
    </div>
  );
}

export default SignUpPage;
