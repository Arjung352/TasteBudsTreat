import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Recipies from "./Recipies";
import About from "./AboutMe/About";
import Register from "./Register";
import Error from "./Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Navbar />>
            <Route index element={<Home />} />
            <Route path="recipies" element={<Recipies />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
