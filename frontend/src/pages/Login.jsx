import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const { data } = await api.post("/auth/login", form);
      login({ ...data });
      navigate(from, { replace: true });
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <h2>Welcome back</h2>
      <p className="help">Log in to manage your bookings.</p>

      <form onSubmit={submit} className="form mt-3">
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
          <button className="btn" type="submit">Log in</button>
        </div>
        {msg && <p className="alert mt-2">{msg}</p>}
      </form>
    </>
  );
}
