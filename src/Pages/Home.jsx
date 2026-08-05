import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [college, setCollege] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const inputClass =
    "w-full p-3 border border-gray-400 rounded mb-4 text-black focus:outline-none focus:ring-2 focus:ring-purple-400";

  function handleSubmit(event) {
    event.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      dateofbirth === "" ||
      college === ""
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    setSuccess(true);

setTimeout(() => {
  setSuccess(false);
  navigate("/about");
}, 1000);



    

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Date of Birth:", dateofbirth);
    console.log("College:", college);

    setName("");
    setEmail("");
    setPassword("");
    setDateofbirth("");
    setCollege("");
  }

  return (
    <>
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-5 py-3 rounded shadow-lg">
          Please Fill And Submit
        </div>
      )}

      {success && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-5 py-3 rounded shadow-lg">
          Form Submitted Successfully!
        </div>
      )}

      <div className="bg-white/80 max-w-md mx-auto p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Student Registration
        </h1>

        <h4 className="text-center mb-6">
          Today's Date: {new Date().toLocaleDateString()}
        </h4>

        <form onSubmit={handleSubmit}>
          <input
            className={inputClass}
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            className={inputClass}
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className={inputClass}
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <input
            className={inputClass}
            type="date"
            value={dateofbirth}
            onChange={(event) => setDateofbirth(event.target.value)}
          />

          <input
            className={inputClass}
            type="text"
            placeholder="Enter Your College Name"
            value={college}
            onChange={(event) => setCollege(event.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-pink-300 hover:bg-pink-400 text-black p-3 rounded mb-3"
          >
            Submit
          </button>

          <button
            type="button"
            className="w-full bg-gray-300 hover:bg-gray-400 p-3 rounded"
            onClick={() => {
              setName("");
              setEmail("");
              setPassword("");
              setDateofbirth("");
              setCollege("");
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;