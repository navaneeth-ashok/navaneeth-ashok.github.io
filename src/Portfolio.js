import Project from "./Project";
import SmallProject from "./SmallProject";
import bored from "./images/bored.jpg";
import firehouse from "./images/firehouse.jpg";
import helpdesk from "./images/covidhelpdesk.jpg";
import youthforum from "./images/youthforum.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="page-container">
        <h2 className="section-headings">Projects</h2>

        <div className="grid-portfolio">
          <Project
            projectTitle="I am Bored"
            altText="iambored screenshot"
            allign="text-right"
            position="right"
            imageSrcURL={bored}
            projectDescription={
              <div>
                A single page movie and song recommendation web-app made with
                <span className="important"> React</span> and{" "}
                <span className="important">Express</span>. Web-app fetches the
                results for the user input from an ExpressJS based server. The
                suggestions are shown in card format, with Spotify and Youtube
                integration. This web-app is mobile friendly and can be
                installed in devices as a <span className="important">PWA</span>
                .
              </div>
            }
            externalLink="https://iambored.navaneeth.dev/"
            techList={[
              "ReactJS",
              "ExpressJS",
              "Node.JS",
              "PWA",
              "Google Cloud Platform",
              "Heroku",
            ]}
          />

          <Project
            projectTitle="Firehouse Pizzeria"
            altText="firehouse screenshot"
            allign="text-left"
            position="left"
            imageSrcURL={firehouse}
            projectDescription={
              <div>
                Built on <span className="important">ASP.NET</span> this web app
                can be used by users to book table, order food and pay for the
                same using a payment gateway. The website admin can manage the
                orders, bookings, menu, billing etc. The web app also functions
                as a homepage for the restaurant where the details about the
                restaurant such as About Us, Contact, Locations are posted.
              </div>
            }
            externalLink="https://foodappnav.azurewebsites.net/"
            githubLink="https://github.com/navaneeth-ashok/RestaurantApplication"
            techList={["ASP.NET", "Entity Framework", "Ajax", "MsSQL", "Azure"]}
          />

          <Project
            projectTitle="Kalam Youth Forum"
            altText="web-app screenshot"
            allign="text-right"
            position="right"
            imageSrcURL={youthforum}
            projectDescription={
              <div>
                A freelance project for an NGO based in India. The website lists
                the activities and projects that are undertaken by the NGO for
                the non-registered users. The web-app is used by the NGO to
                track the activities of its chapters, members and the self help
                groups registered with the NGO. Data is stored in a MsSQL DB
                with <span className="important">high availability</span> and{" "}
                <span className="important">load balancing</span> enabled. The
                web-app also offers a blood donation page on which guests can
                search for matching donors in case of an emergency. The
                blood-donation feature can be installed in mobile devices as a{" "}
                <span className="important">PWA</span> as well.
              </div>
            }
            externalLink="https://kalamyouthforum.azurewebsites.net/"
            techList={[
              ".NET Core",
              "Entity Framework",
              "Ajax",
              "MsSQL",
              "Azure",
            ]}
          />

          <Project
            projectTitle="Covid-19 Helpdesk for Local Government"
            altText="helpdesk screenshot"
            allign="text-left"
            position="left"
            imageSrcURL={helpdesk}
            projectDescription={
              <div>
                A website for keeping track of covid related activities
                happening in my hometown in India. Developed as a one-stop
                solution for finding contact information of the covid helpdesk
                members, volunteers, open provision stores, and emergency
                services in the locality like ambulance, oxygen van, police, and
                fire station.
              </div>
            }
            externalLink="https://navaneeth-ashok.github.io/covidHelpdeskPanchayat/"
            githubLink="https://github.com/navaneeth-ashok/covidHelpdeskPanchayat"
            techList={["CSS", "HTML", "JS", "PWA", "Dark Mode"]}
          />
        </div>
        <h3 className="text-center" style={{ marginTop: "100px" }}>
          Other Projects
        </h3>
        <div className="other-projects-grid">
          <SmallProject
            title="Election Landing Page"
            desc="A landing webpage for a candidate contesting in an election with multilingual support"
            techList={["HTML", "CSS", "JS", "jQuery", "Responsive"]}
            githubLink="https://github.com/navaneeth-ashok/drprameeladevi4pala/tree/gh-pages"
            externalLink="https://navaneeth-ashok.github.io/drprameeladevi4pala/"
          />
          <SmallProject
            title="Javascript Tutorial"
            desc="An interactive Javascript tutorial page explaining concepts about Javascript Array"
            techList={["HTML", "CSS", "JS", "jQuery", "Responsive"]}
            githubLink="https://github.com/navaneeth-ashok/javascriptTutorialPage"
            externalLink="https://navaneeth-ashok.github.io/javascriptTutorialPage/"
          />
          <SmallProject
            title="F1™ 2021 Race Schedule"
            desc="An F1 race calendar with countdown to races and schedule shown in regional as well as UTC time"
            techList={["HTML", "CSS", "JS", "jQuery", "Responsive"]}
            githubLink="https://github.com/navaneeth-ashok/f1schedule2021"
            externalLink="https://navaneeth-ashok.github.io/f1schedule2021/"
          />
          <SmallProject
            title="Support Ticketing System"
            desc=".NET Core based ticketing software containing options to Create, Assign, Delete support tickets. Includes XML based user auth instead of .NET Identity"
            techList={[".NET Core", "XML", "Bootstrap", "Responsive"]}
            githubLink="https://github.com/navaneeth-ashok/SupportTicketingSystem"
          />
          <SmallProject
            title="500px Profile"
            desc="This is where I post most of my captures, includes street & landscape photography, and even a few attempts at macro."
            techList={["Photography"]}
            externalLink="https://500px.com/p/navaneeth_ashok"
          />
          <SmallProject
            title="Deviant Art Profile"
            desc="Fairly new to deviantart, and my profile contains few minimalist landscapes with my trusted overland vehicle."
            techList={["Digital Art"]}
            externalLink="https://www.deviantart.com/navaneethsketch"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
