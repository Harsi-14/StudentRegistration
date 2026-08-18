import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [phone, setPhone]= useState("");
  const [countryCode, setCountryCode] = useState("");
  const [course, setCourse] = useState("");


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
      phone ===""||
      course ==="" 
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
    console.log("Phone:", countryCode + phone);
    console.log("Course:",course);
    

    setName("");
    setEmail("");
    setPassword("");
    setDateofbirth("");
    setPhone("");
    setCountryCode("+91");
    setCourse("");
  
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
          Student Registration Portal
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

          <div className="flex gap-2 mb-4">

  <select
    className="p-3 border border-gray-400 rounded text-black"
    value={countryCode}
    onChange={(e)=>setCountryCode(e.target.value)}
  >

    <option value="+91">🇮🇳 +91</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+61">🇦🇺 +61</option>
    <option value="+81">🇯🇵 +81</option>

  </select>


  <input
    className="w-full p-3 border border-gray-400 rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
    type="text"
    placeholder="Enter Your Phone Number"
    value={phone}
    onChange={(e)=>setPhone(e.target.value)}
  />
  </div>
  {
  phone.length > 0 && phone.length !== 10 &&
  <p className="text-red-500 mb-3">
    Phone number must contain 10 digits
    </p>
  }

  <select
  className={inputClass}
  value={course}
  onChange={(event) => setCourse(event.target.value)}
  >
    <option value="">Select Your Course</option>
    <option value="AI&DS">AI&DS</option>
    <option value="AI&ML">AI&ML</option>
    <option value="CSE">CSE</option>
    <option value="EEE">EEE</option>
    <option value="MECH">MECH</option>
    <option value="ECE">ECE</option>
    <option value="CYBER SECURITY">CYBER SECURITY</option>
    <option value="CSBS">CSBS</option>
  </select>
  
 

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