import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "./Redux/Actions/authActions";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector(state => state.auth.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      dispatch(login(user));
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>

      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin} className="btn-login">Login</button>

      <p>
        If you are not registered, <Link to="/register">register now!</Link>
      </p>
    </div>
  );
}
