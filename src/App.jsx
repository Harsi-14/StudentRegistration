import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url("https://wallpaperaccess.com/full/2245193.jpg")',
      }}
    >
      <nav className="w-full bg-gray-800 p-4">
        <div className="flex justify-end items-center gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300"
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/course"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300"
            }
          >
            Course
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      <br />
      <br />

      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;