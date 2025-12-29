import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "./Redux/Actions/authActions";

export default function Regitrer() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(register(form));
    navigate("/login");
  };

  return (
    <div className="Registrer">
      <h2>Register</h2>

      <input placeholder="First name" onChange={e => setForm({ ...form, prenom: e.target.value })} />
      <input placeholder="Last name" onChange={e => setForm({ ...form, nom: e.target.value })} />
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />

      <button onClick={handleSubmit}>Registrer</button>
    </div>
  );
}
