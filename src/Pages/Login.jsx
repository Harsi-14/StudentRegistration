import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
  event.preventDefault();

  if (email.trim() === "" || password.trim() === "") {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 3000);

    return;
  }

  
  setSuccess(true);

  localStorage.setItem("isLoggedIn", "true");
  setIsLoggedIn(true);
  
  setTimeout(() => {
    setSuccess(false);
    navigate("/home");
  }, 1000);

  console.log("Email:", email);
  console.log("Password:", password);

  setEmail("");
  setPassword("");
}

  return (
    <>
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-5 py-3 rounded">
          Invalid Mail And Password
        </div>
      )}

      {success && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-5 py-3 rounded">
          Entered successfully!
        </div>
      )}

      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-xl w-96">
          <h1 className="text-3xl font-bold text-center mb-5">Login</h1>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border p-3 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border p-3 rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="w-full bg-blue-500 text-white p-3 rounded"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;