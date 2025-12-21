import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Signup = () => {
  const { emailSignup, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (pass) => {
    if (pass.length < 6) return "Minimum 6 characters";
    if (!/[A-Z]/.test(pass)) return "At least 1 uppercase letter";
    if (!/[a-z]/.test(pass)) return "At least 1 lowercase letter";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const passError = validatePassword(password);
    if (passError) {
      setError(passError);
      return;
    }

    try {
      await emailSignup(
        name,
        email,
        password,
        photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"
      );
      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleSignIn();
      toast.success("Google Signup Successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSignup} className="space-y-4 w-96">
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <input placeholder="Name" className="input w-full"
          onChange={(e) => setName(e.target.value)} required />

        <input placeholder="Email" className="input w-full"
          onChange={(e) => setEmail(e.target.value)} required />

        <input placeholder="Photo URL" className="input w-full"
          onChange={(e) => setPhotoURL(e.target.value)} />

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="input w-full"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span onClick={() => setShow(!show)}
            className="absolute right-3 top-3 cursor-pointer">
            {show ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button className="btn btn-primary w-full">Register</button>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline w-full">
          <FaGoogle /> Google Signup
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
