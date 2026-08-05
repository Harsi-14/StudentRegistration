import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const[success,setSuccess] = useState(false);
  const[error,setError] = useState(false);


  function handleSignup(event) {
  event.preventDefault();

  if (email === "" || password === "") {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 3000);

    return;
  }

  // Check duplicate email
  const savedEmail = localStorage.getItem("email");

  if (email === savedEmail) {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 3000);

    return;
  }

  
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  setSuccess(true);

  setTimeout(() => {
    setSuccess(false);
  }, 3000);

  console.log("Email:", email);
  console.log("Password:", password);

  setEmail("");
  setPassword("");
}

  return (
    <>

    {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-5 py-3 rounded shadow-lg">
          Please Fill
        </div>
      )}

      {success && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-5 py-3 rounded shadow-lg">
          Account Created Successfully 
        </div>
      )}



    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white/90 w-96 p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSignup}>
            
            <input
            type="email"
            placeholder="Enter Email"
            className="w-full border p-3 rounded mb-4"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full border p-3 rounded mb-5"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded"
          >
            Create Account
          </button>

        </form>

      </div>
    </div>
    </>
  );
}
export default Signup;
