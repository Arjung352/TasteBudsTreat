import Myself from "./Myself/Myself";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
function About() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        marginTop: "1rem",
      }}
    />
  );
  return (
    <div className="flex justify-center">
      <div className="w-4/5 flex flex-row">
        <div className=" font-sans font-semibold font-2xl mr-16 mt-8">
          <h1 className="font-bold text-4xl mb-4">About Us</h1>
          <h2 className="text-3xl mb-4">Namaste</h2>
          <p className="font-salsa">
            We are glad that you are here and thank you for stopping by on
            TasteBudsTreat's which has pure vegetarian recipes, mostly Indian
            but some World Cuisine as well. There are many Eggless Baking
            Recipes as well. Most of the recipes are in step by step pictorial
            guide. They are easy to understand and relate too. Some recipes have
            short videos with the stepwise photo guide.
          </p>
          <ColoredLine color={"black"} />
          <h1 className="font-bold text-4xl mb-4 mt-4">Who am I</h1>
          <h2 className="text-3xl mb-4">Hello!</h2>
          <p className="font-salsa">
            I am Arjun Gupta A 2nd Year BCA Student In SGTBIMIT Affiliated in
            IPU.A Web developer with a knack for turning ideas into functional
            and visually appealing websites. Proficient in FRONT-END
            Technology's Like- HTML, CSS, JavaScript, Material-UI comfortable
            working with frameworks like ReactJS, Bootstrap, Tailwind. Eager to
            learn and adapt to new technologies and currently Learning BACK-END.
            Passionate about creating seamless user experiences . Let's connect
            and build something amazing!
          </p>
          <ColoredLine color={"black"} />
          <h1 className="font-bold text-4xl mb-4 mt-4">Connect me!</h1>
          <div>
            <a href="https://www.instagram.com/_arjungupta29/" target="_">
              <InstagramIcon className="mr-2 cursor-pointer" />
            </a>
            <a href="https://github.com/Arjung352/" target="_">
              <GitHubIcon className="mr-2 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-gupta-948b11291"
              target="_"
            >
              <LinkedInIcon className="cursor-pointer mr-2" />
            </a>
            <a href="mailto:arjung7751@gmail.com" target="_">
              <MailOutlineIcon className="cursor-pointer mr-2" />
            </a>
            <a href="https://x.com/_arjungupta29" target="_">
              <XIcon className="cursor-pointer" />
            </a>
          </div>
        </div>
        <Myself />
      </div>
    </div>
  );
}
export default About;
