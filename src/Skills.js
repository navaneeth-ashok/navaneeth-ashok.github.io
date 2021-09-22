import jsLogo from "./images/icons8-javascript.svg";
import languagesLogo from "./images/icons8-code-100.png";
import cloudLogo from "./images/icons8-cloud-100.png";
import dbLogo from "./images/icons8-database-100.png";
import designLogo from "./images/icons8-design-96.png";
import fwLogo from "./images/icons8-firewall-96.png";

function Skills() {
  return (
    <section id="skills">
      <div className="page-container">
        <h2 className="section-headings">Skills</h2>
        <div className="skill-grid-container">
          <div className="skill__item">
            <img src={jsLogo} alt="Javascript" />
            <h3>Javascript</h3>
            <p>React, Express, ES6, jQuery</p>
          </div>
          <div className="skill__item">
            <img src={languagesLogo} alt="Programming Languages" />
            <h3>Languages & Frameworks</h3>
            <p>C#, Python, PHP</p>
            <p>.NET Core, ASP .NET</p>
          </div>
          <div className="skill__item">
            <img src={cloudLogo} alt="Cloud" />
            <h3>Cloud</h3>
            <p>AWS, Azure, Google Cloud Platform</p>
          </div>
          <div className="skill__item">
            <img src={dbLogo} alt="Database" />
            <h3>Database</h3>
            <p>MySQL, MongoDB</p>
          </div>
          <div className="skill__item">
            <img src={fwLogo} alt="Security" />
            <h3>Network & Security</h3>
            <p>VPN, Wireless, Firewall</p>
          </div>
          <div className="skill__item">
            <img src={designLogo} alt="Design" />
            <h3>Design</h3>
            <p>CSS, SASS, Photoshop</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
