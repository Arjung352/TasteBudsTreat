import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  text-olive font-semibold">
        <img
          src="\src\taste_buds_logo_-_green-removebg-preview.png"
          className=" h-20 w-25 bg-gray-100 mix-blend-darken"
        />
        <ul className=" flex justify-end font-sans text-2xl">
          <li className="mr-8 mt-1 hover:text-black">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-8 mt-1 hover:text-black">
            <NavLink to="/Recipies">Recipies</NavLink>
          </li>
          <li className="mr-8 mt-1 hover:text-black">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="mr-6 mt-1 hover:text-black">
            <NavLink to="/Register">Register</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
