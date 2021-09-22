import githubLogo from "./images/icons8-github-squared.svg";
import linkedinLogo from "./images/icons8-linkedin.svg";
import px500Logo from "./images/icons8-500px.svg";
import authorPic from "./images/author_image.jpg";
import deviantLogo from "./images/icons8-deviantart.svg";
function About() {
  return (
    <section id="about">
      <div className="page-container">
        <h2 className="section-headings">About Me</h2>
        <div className="flex-container-about">
          <div className="about-para">
            <p>
              I'm a freelance web designer and developer, experienced in HTML,
              CSS and JS. I'm passionate about building responsive, accessible
              websites and applications. I have designed and developed web-apps
              on modern web frameworks like{" "}
              <span className="important">.NET Core</span> and{" "}
              <span className="important">Express</span> and front end libraries
              like <span className="important">React</span>.
            </p>
            <p>
              Previously, I worked at SonicWall, India as a Software Engineer,
              where I worked on creating tools and libraries for testing various
              firewall and VPN solutions. I have co-authored a{" "}
              <span className="important">patent</span> during my time in
              Sonicwall.
            </p>
            <p>
              Besides coding, I'm interested in photography, digital art and
              automobiles.
            </p>
            <div className="flex-container">
              <div className="about__education">
                <h3>Qualifications</h3>
                <ul className="education__list">
                  <li>
                    <h4>Graduate Certificate, 2021</h4>
                    <div className="education__university-name">
                      The Humber College Institute of Technology & Advanced
                      Learning, Toronto
                    </div>
                  </li>
                  <li>
                    <h4>Bachelor of Technology : CSE, 2016</h4>
                    <div className="education__university-name">
                      Amrita University, India
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={authorPic} alt="author" />
            <ul className="social-media-icons">
              <li>
                <a href="https://github.com/navaneeth-ashok">
                  <img
                    src={githubLogo}
                    alt="github logo"
                    className="social-media icons"
                  />
                </a>
              </li>

              <li>
                <a href="https://500px.com/p/navaneeth_ashok/">
                  <img
                    src={px500Logo}
                    alt="500px logo"
                    className="social-media icons"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.deviantart.com/navaneethsketch">
                  <img
                    src={deviantLogo}
                    alt="deviant logo"
                    className="social-media icons"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/navaneeth-ashok">
                  <img
                    src={linkedinLogo}
                    alt="linkedin logo"
                    className="social-media icons"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
