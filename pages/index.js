import Layout from "../components/Layout";
import TextTyping from "../components/index/TextTyping";
import WebLottie from "../components/lotties/WebLottie";
import Astronoute from "../components/lotties/Astronoute";
import Designer from "../components/lotties/Designer";
import Rocket from "../components/lotties/Rocket";
import Mobiledev from "../components/lotties/Mobiledev";
import Websitedev from "../components/lotties/Websitedev";
import WorkList from "../components/index/WorkList";
import ContactList from "../components/index/ContactList";
import Rocketlaunch from "../components/lotties/Rocketlaunch";

export default function Home() {
  return (
    <Layout>
      <div id="home" className="container">
        <TextTyping />
        <div className="home-container">
          <WebLottie />
        </div>
        <div id="about" className="about-container">
          <h1>About Me and AstroDev</h1>
          <div className="about-div">
            <div>
              <Astronoute />
            </div>
            <div>
              <p>
                My name is Apisit Lomhome and You can call me Frong Astronoute..
                Currently I am studying in faculty of Information Technology at
                king mongkut's university of technology thonburi. I had learnt a
                lot for nodejs field. after that, I have kept learning coding as
                a fullstack developer. Especially, on React React Native field.
                I have experiences more than 1 years of developing as a
                Self-project and Freelance. I'm looking for new chanllenging
                project. Might be startup or something else. Let Go to the moon
                with us!!
              </p>
            </div>
          </div>
        </div>
        <div id="skills" className="skill-container">
          <h1>My Fuels (Skills)</h1>
          <div className="skill-div">
            <div>
              <h3>fullstack Developer</h3>
              <h3>HTML5</h3>
              <h3>CSS3</h3>
              <h3>JAVASCRIPT</h3>
              <h3>GIT</h3>
              <h3>COMMAND LINE</h3>
              <h3>NODEJS</h3>
              <h3>LINE DEVELOPER</h3>
              <h3>FIREBASE</h3>
              <h3>REACT</h3>
            </div>
            <div>
              <Rocket />
            </div>
            <div>
              <h3>MONGODB</h3>
              <h3>EXPRESS.JS</h3>
              <h3>NODEJS</h3>
              <h3>CLOUD DEPLOYMENT</h3>
              <h3>CI / CD</h3>
              <h3>Figma</h3>
              <h3>ADOBE XD</h3>
              <h3>ADOBE PHOTOSHOP</h3>
              <h3>ADOBE ILLUSDTRATOR</h3>
            </div>
          </div>
        </div>
        <div id="work" className="portfolio-container">
          <h1>Recent Work</h1>
          <WorkList
            title={"Mobile Application Mockup"}
            picture={"./img/locker/logo.png"}
            tech={["- UI/UX", "- Figma"]}
          />
          <WorkList
            title={"Mobile Application Mockup"}
            picture={"./img/luvel/logo.png"}
            tech={["- UI/UX", "- Figma"]}
          />
          <WorkList
            title={"Website Mockup"}
            picture={"./img/elite/logo.png"}
            tech={["- UI/UX", "- Figma"]}
          />
          <WorkList
            title={"Website Mockup"}
            picture={"./img/freshman/logo.png"}
            tech={["- UI/UX", "- Figma"]}
          />
          <WorkList
            title={"Website Mockup"}
            picture={"./img/inwtrue/logo.png"}
            tech={["- UI/UX", "- Figma"]}
          />
        </div>
        <div id="service" className="service-contain">
          <h1>Our services</h1>
          <div className="service-div">
            <Designer />
            <h2>UI / UX Design</h2>
          </div>
          <div className="service-div">
            <Mobiledev />
            <h2>Mobile Application</h2>
          </div>
          <div className="service-div">
            <Websitedev />
            <h2>Website Development</h2>
          </div>
        </div>
        <div id="contact" className="contact-contain">
          <h1>Contact</h1>
          <div className="contact-item-dev">
            <ContactList
              transitionclass={"contact-div1"}
              ico={"far fa-envelope"}
              text={"Email : frongrider2@gmail.com"}
              bg={"#ff7a45"}
              bd={"20px 0 0 20px"}
            />
            <ContactList
              transitionclass={"contact-div2"}
              ico={"fab fa-line"}
              text={"Line : frongrider"}
              bg={"#73d13d"}
              bd={"20px 0 0 20px"}
            />
            <ContactList
              transitionclass={"contact-div3"}
              ico={"fas fa-phone-alt"}
              text={"Tel : (+66) 938614950"}
              bg={"#1890ff"}
              bd={"20px 0 0 20px"}
            />
            <ContactList
              transitionclass={"contact-div4"}
              ico={"fab fa-instagram"}
              text={"Instagram : frongapil"}
              bg={"#f759ab"}
              bd={"20px 0 0 20px"}
            />
          </div>
          <div id="moon" className="space-contain">
            <Rocketlaunch />
          </div>
        </div>
      </div>
    </Layout>
  );
}
