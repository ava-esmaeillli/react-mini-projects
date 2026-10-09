import { useState } from "react";
import Input from "../components/Input";
import { LuUserRound, LuLockKeyhole } from "react-icons/lu";
import bg from "../assets/bg.png";
import SocialButton from "../components/SocialButton";
import icon_google from "../assets/icon-google.png";
import icon_facebook from "../assets/icon-facebook.png";
import { login, saveToken } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (username.trim() === "") {
      setError("Fill Username!");
      return;
    }
    if (password.trim() === "") {
      setError("Fill Password!");
      return;
    }
    if (password.trim().length < 6) {
      setError("Enter 6 Character!");
      return;
    }
    setLoading(true);
    try {
      const result = await login(username, password);
      saveToken(result);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen px-7 lg:px-0">
      <form
        className="w-full lg:w-2/4 h-full flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 items-center justify-center text-center w-full max-w-md h-full">
          <h1 className="text-4xl text-black font-bold">Login</h1>

          <p className="text-base text-secondary">
            How to i get started lorem ipsum dolor at?
          </p>

          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            icon={<LuUserRound className="text-secondary" />}
          />

          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            icon={<LuLockKeyhole className="text-secondary" />}
          />

          {error ? <p className="text-red-500">{error}</p> : ""}

          <button
            type="submit"
            disabled={loading}
            className="bg-linear-to-r from-primary to-primary-dark hover:from-primary-dark transition duration-200 text-white text-sm font-bold rounded-2xl shadow-xl cursor-pointer py-4 px-7 my-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Loading ..." : "Login Now"}
          </button>

          <div className="flex items-center gap-3 w-full text-secondary">
            <hr className="w-full text-primary-light" />
            <h4 className="text-nowrap">
              <b>Login</b> with Others
            </h4>
            <hr className="w-full text-primary-light" />
          </div>

          <SocialButton src={icon_google} text="google" />

          <SocialButton src={icon_facebook} text="facebook" />
        </div>
      </form>

      <div className="w-full lg:w-2/4 h-full hidden lg:block">
        <img
          src={bg}
          className="w-full h-full object-cover bg-primary"
          alt=""
        />
      </div>
    </div>
  );
}
