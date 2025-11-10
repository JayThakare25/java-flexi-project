import { useAuth } from "../context/AuthContext.jsx";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p className="help">Pick a place. Pack your bags. Pretend you won the lottery.</p>

      <div className="grid grid-3 mt-3">
        <div className="hotel">
          <h4>The Grand Mirage</h4>
          <span>Mumbai · ₹7,800 / night</span>
        </div>
        <div className="hotel">
          <h4>SeaView Retreat</h4>
          <span>Goa · ₹6,200 / night</span>
        </div>
        <div className="hotel">
          <h4>Hilltop Residency</h4>
          <span>Manali · ₹5,500 / night</span>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn-ghost btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}