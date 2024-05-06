import { useNavigate } from "react-router-dom";
import "./Myself.css";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
function Myself() {
  const redirect = useNavigate();
  const gotoAbout = () => {
    redirect("/About");
  };
  return (
    <div className="outter">
      <div className="Myself">
        <div className="Pic bg-[url('https://www.vegrecipesofindia.com/wp-content/themes/veg-recipes-2020/assets/icons/logo/logomark.svg')] pic-container">
          <img
            src="./src/AboutMe/Myself/Me.png"
            alt="Arjun"
            className="MyPic"
          />
          <p className="Name poetsen-one-regular">Arjun Gupta</p>
        </div>
        <div className="AboutMe">
          <p>
            Hi, I am Arjun Gupta A 2nd Year BCA Student In SGTBIMIT Affiliated
            in IPU.A Web developer with a knack for turning ideas into
            functional and visually appealing websites. Proficient in FRONT-END
            Technology's Like- HTML, CSS, JavaScript, Material-UI comfortable
            working with frameworks like ReactJS, Bootstrap, Tailwind. Eager to
            learn and adapt to new technologies and currently Learning BACK-END.
            Passionate about creating seamless user experiences . Let's connect
            and build something amazing!
          </p>
          <button
            className="redirectToAbout"
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => gotoAbout()}
          >
            Read More
            <ReadMoreIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Myself;
