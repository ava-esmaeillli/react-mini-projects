import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-primary-light text-secondary">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <p className="text-base text-secondary">Welcome Admin ...</p>
      <button
        onClick={handleLogout}
        className="bg-linear-to-r from-primary-dark to-secondary hover:from-secondary transition duration-200 text-white text-sm font-bold rounded-2xl shadow-xl cursor-pointer py-4 px-7 my-3"
      >
        Logout
      </button>
    </section>
  );
}
