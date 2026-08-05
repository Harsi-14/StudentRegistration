import { NavLink } from "react-router-dom";

function App(){
  return(
    <nav className="bg-gray-800 p-4">
      <NavLink
        to="/"
        className={({isActive}) =>
        isActive ? "text-yellow-300 font-bold" : "Text-white"
        }
        >
        Home |{""}
        </NavLink>

        <NavLink
          to="/about"
          className={({isActive}) =>
          isActive ? "Text-yellow-300 font=bold" : "Text-white"
        }
        >
        About |{""}
        </NavLink>

        <NavLink
          to="/contact"
          className={({isActive}) =>
          isActive ? "Text-yellow-300 font-bold" : "Text-white"
          }
          >
          Contact |{""}
        </NavLink>

        <NavLink
          to="/course"
          className={({isActive}) =>
          isActive ? "Text-yellow-300 font-bold" : "Text-white"
          }
          >
          Course
        </NavLink>
    </nav>
  );
}
export default App;