import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";


import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);

  const PrivateRoute = ({ children }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

 

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
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300"
            }
          >
            Login
          </NavLink>



          <NavLink
  to={isLoggedIn ? "/home" : "#"}
  onClick={(e) => {
    if (!isLoggedIn) {
      e.preventDefault();
    }
  }}
  className={({ isActive }) =>
    isLoggedIn
      ? isActive
        ? "text-yellow-300 font-bold"
        : "text-white hover:text-yellow-300"
      : "text-gray-500 cursor-not-allowed"
  }
  >
    Home
  </NavLink>


  <NavLink
  to={isLoggedIn ? "/about" : "#"}
  onClick={(e) => {
    if (!isLoggedIn) {
      e.preventDefault();
    }
  }}
  className={({ isActive }) =>
    isLoggedIn
      ? isActive
        ? "text-yellow-300 font-bold"
        : "text-white hover:text-yellow-300"
      : "text-gray-500 cursor-not-allowed"
  }
>
  About
  </NavLink>

  <NavLink
  to={isLoggedIn ? "/course" : "#"}
  onClick={(e) => {
    if (!isLoggedIn) {
      e.preventDefault();
    }
  }}
  className={({ isActive }) =>
    isLoggedIn
      ? isActive
        ? "text-yellow-300 font-bold"
        : "text-white hover:text-yellow-300"
      : "text-gray-500 cursor-not-allowed"
  }
>
  Course
</NavLink>

<NavLink
  to={isLoggedIn ? "/contact" : "#"}
  onClick={(e) => {
    if (!isLoggedIn) {
      e.preventDefault();
    }
  }}
  className={({ isActive }) =>
    isLoggedIn
      ? isActive
        ? "text-yellow-300 font-bold"
        : "text-white hover:text-yellow-300"
      : "text-gray-500 cursor-not-allowed"
  }
>
  Contact
</NavLink>



          
        </div>
      </nav>


      <br />
      <br />

      <Routes>

        <Route
        path="/"
        element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        
        
        <Route
        path="/home"
        element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
        }
      />

      <Route
      path="/about"
      element={
      <PrivateRoute>
        <About />
    </PrivateRoute>
    }
    />

    <Route
    path="/course"
    element={
    <PrivateRoute>
      <Course />
    </PrivateRoute>
  }
  />
  
  <Route
  path="/contact"
  element={
    <PrivateRoute>
      <Contact />
    </PrivateRoute>
  }
  />



        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;