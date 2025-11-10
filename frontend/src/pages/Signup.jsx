import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const { data } = await api.post("/auth/register", form);
      login({ ...data });
      navigate("/");
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <h2>Create account</h2>
      <p className="help">Welcome! Create an account to book hotels.</p>

      <form onSubmit={submit} className="form mt-3">
        <input
          className="input"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <div className="mt-2">
          <button className="btn" type="submit">Sign up</button>
        </div>
        {msg && <p className="alert mt-2">{msg}</p>}
      </form>
    </>
  );
}
