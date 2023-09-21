import Project from "./Project";
import bored from "./images/bored.jpg";
import firehouse from "./images/firehouse.jpg";
import helpdesk from "./images/covidhelpdesk.jpg";
import youthforum from "./images/youthforum.jpg";
import kalamCaseStudy from "./CaseStudyKalamYouthForumNavaneeth.pdf";
import canadaSalary from "./images/canadaSalaryPreview.jpg";
import f1gif from "./images/formula1-2022-app.gif";
import photoport from "./images/photography.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="page-container">
        <h2 className="section-headings">Projects</h2>

        <div className="grid-portfolio">
          <Project
            projectTitle="Photography Portfolio"
            altText="portfolio screenshot"
            allign="text-right"
            position="right"
            imageSrcURL={photoport}
            projectDescription={
              <div>
                A small personal portfolio website to showcase my street
                photography journey. The frontend is powered by{" "}
                <span className="important">Next.js</span> which offers server
                side rendering which is accessible and has smaller payload. The
                backend is powered by SanityIO which offers one of the easiest
                to use experience for creating schemas and offers quite a good
                amount of features in its free tier. One good thing with
                SanityIO is that the images are served over their CDN, which
                makes my deployment really compact and offers high availability
                and lower latency while serving the images.
              </div>
            }
            externalLink="https://www.navaneethashok.com/"
            techList={["NextJS", "SanityIO", "Vercel"]}
          />
          <Project
            projectTitle="I am Bored"
            altText="iambored screenshot"
            allign="text-left"
            position="left"
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
                . An <span className="important"> Angular</span> version of the
                app is deployed here,{" "}
                <a
                  href="https://angular.iambored.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__links__highlight"
                >
                  IamBoredAngular
                </a>
                {"."}
              </div>
            }
            githubLink="https://github.com/navaneeth-ashok/IamBoredAngular/"
            externalLink="https://iambored.navaneeth.dev/"
            techList={[
              "ReactJS",
              "ExpressJS",
              "Node.JS",
              "PWA",
              "Google Cloud Platform",
            ]}
          />

          <Project
            projectTitle="F1 2022 Schedule"
            altText="f1 app screenshot"
            allign="text-right"
            position="right"
            imageSrcURL={f1gif}
            projectDescription={
              <div>
                A single page Formula1 Schedule web-app made with
                <span className="important"> React</span> with{" "}
                <span className="important">PWA</span> offline functionality.
                The app is hosted in Firebase with CICD using GitHub Actions.
                The app is designed to provide a quick glance into the F1 2022
                Calender without using the bloated official app. The app is
                designed primarily for mobile devices and offers smooth
                horizontal scroll. On load the user will be automatically shown
                the schedule of the ongoing race or the next race that will
                happen. The schedule of the race events are locked onto the user
                locale and thus the time shown will be local to the user's
                timezone.
              </div>
            }
            githubLink="https://github.com/navaneeth-ashok/formula1-2022-calendar"
            externalLink="https://formula1-2022.web.app"
            techList={["ReactJS", "Firebase", "PWA"]}
          />

          <Project
            projectTitle="CS & Tech Job Salary Insights Canada"
            altText="salary app screenshot"
            allign="text-left"
            position="left"
            imageSrcURL={canadaSalary}
            projectDescription={
              <div>
                Salary Insights app for the people working in computer science
                and tech jobs in Canada. The data is fetched from
                r/cscareerquestionsCAD subreddit using a python script and the
                data is stored in a MongoDB database. An ExpressJS API service
                is then created to serve the data in JSON format for the
                frontend which is developed in Angular. The readme file provided
                in the{" "}
                <a
                  href="https://github.com/navaneeth-ashok/salarySurveyClient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__links__highlight"
                >
                  Github
                </a>{" "}
                repository has detailed information and links to the associated
                csv converter and backend repository. The app is rendered on the
                server using{" "}
                <span className="important">Angular Universal</span>.
              </div>
            }
            externalLink="http://salary-app.navaneeth.dev/"
            githubLink="https://github.com/navaneeth-ashok/salarySurveyClient"
            techList={[
              "Angular",
              "ExpressJS",
              "MongoDB",
              "Node",
              "MEAN",
              "Python",
              "Google Cloud Platform",
              "SSR",
            ]}
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
                <span className="important">PWA</span> as well. You can read
                more about the project from this detailed{" "}
                <a
                  href={kalamCaseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__links__highlight"
                >
                  case study
                </a>
                .
              </div>
            }
            githubLink="https://github.com/navaneeth-ashok/kalamYouthForum"
            techList={[
              ".NET Core",
              "Entity Framework",
              "Ajax",
              "MsSQL",
              "Azure",
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
            githubLink="https://github.com/navaneeth-ashok/RestaurantApplication"
            techList={["ASP.NET", "Entity Framework", "Ajax", "MsSQL", "Azure"]}
          />

          <Project
            projectTitle="Covid-19 Helpdesk for Local Government"
            altText="helpdesk screenshot"
            allign="text-right"
            position="right"
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
      </div>
    </section>
  );
}

export default Portfolio;
