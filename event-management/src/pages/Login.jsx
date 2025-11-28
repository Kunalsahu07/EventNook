import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";
import { Mail, Lock } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnText, setBtnText] = useState("Login");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    try {
      setBtnText("Logging in...");
      await signInWithEmailAndPassword(auth, email, password);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setBtnText("Login");
      alert(error.message);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-heading">Admin Login</h2>
        <p className="login-sub">Sign in to your event management dashboard</p>
        
        <div className="login-divider"></div>

        <div className="login-field">
          <Mail className="icon" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        <div className="login-field">
          <Lock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        <div className="login-actions">
          <button className="btn login-btn" onClick={handleLogin}>
            {btnText}
          </button>
          <div className="login-links">
            <a className="text-link" href="#">← Forgot password?</a>
            <a className="text-link" href="/">← Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};
