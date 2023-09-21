function Experience() {
  return (
    <section id="experience">
      <div className="page-container">
        <h2 className="section-headings">Experience</h2>
        <div className="grid-container">
          <div className="exp__year">
            <h3>Nov 2021 - Present</h3>
          </div>
          <div className="exp__card">
            <h3>Frontend Web Developer & DevOps Engineer</h3>
            <h4>Cetaris Canada Inc</h4>
            <ul className="exp_ul no_bullet">
              <li>
                <ul>
                  <li>
                    <div className="exp_title">
                      Working on Angular for developing micro-front-end for
                      micro-services.
                    </div>
                  </li>
                  <li>
                    <div className="exp_title">
                      Working on Azure DevOps in creating CI/CD pipelines.
                    </div>
                  </li>
                  <li>
                    <div className="exp_title">
                      Experienced in packaging .NET micro-services and Angular
                      web-apps into docker containers.
                    </div>
                  </li>
                  <li>
                    <div className="exp_title">
                      Experienced in container orchestration using Kubernetes,
                      and Infrastructure as Code using Terraform.
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="exp__year">
            <h3>2021 - Present</h3>
          </div>
          <div className="exp__card">
            <h3>Freelance Web Developer</h3>
            <ul className="exp_ul no_bullet">
              <li>
                <span className="exp_work">
                  IamBored : Movie and Music Recommendation App
                </span>
                <ul>
                  <li>
                    <div className="exp_title">
                      React and Express based web-app to recommend movie and
                      music suggestions to the user based on their input.
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span className="exp_work">Kalam Youth Forum</span>
                <ul>
                  <li>
                    <div className="exp_title">
                      A CMS created on .NET Core for an NGO. The web-app is used
                      to track the activities of its chapters, members and the
                      self help groups registered with the NGO.
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span className="exp_work">
                  Covid-19 Helpdesk for Local Government Body
                </span>
                <ul>
                  <li>
                    <div className="exp_title">
                      A web-app developed for the local government body to
                      function as a covid helpdesk portal.
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="exp__year">
            <h3>Jun 2016 - Jul 2021</h3>
          </div>
          <div className="exp__card">
            <h3>Software Engineer</h3>
            <h4>SonicWall ( DELL SonicWall )</h4>
            <ul className="exp_ul no_bullet">
              <li>
                <span className="exp_work">Web Development</span>
                <ul>
                  <li>
                    <div className="exp_title">
                      Developed a cloud central management portal for managing,
                      monitoring and configuring SMA1000 appliances using REST
                      API.
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span className="exp_work">
                  Automation Framework Development
                </span>
                <ul>
                  <li>
                    <div className="exp_title">
                      Daily and Weekly Automated Reporting Tool : An automated
                      tool for the managers to keep track of the progress of the
                      engineers.
                    </div>
                  </li>
                  <li>
                    <div className="exp_title">
                      Co-developed Python unittest based automation framework
                      for the QA team for automating test-cases and scenarios
                      using API and UI testing tools.
                    </div>
                  </li>
                  <li>
                    <div className="exp_title">
                      Designed and Deployed network lab for testing Central
                      Management System, emulating traffic from various geo
                      zones for testing load-based geo redirection
                      functionalities of the Global High Availability module.
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span className="exp_work">Management</span>
                <ul>
                  <li>
                    <div className="exp_title">
                      Managed a team of 4 interns during the 2019-2021 period,
                      mentoring, and guiding them with Automation related tasks.
                      Lead a team of 6 engineers for a migration assignment of
                      porting code from an older framework to a new python
                      framework.
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span className="exp_work">Networking and Security</span>
                <ul>
                  <li>
                    <div className="exp_title">
                      Worked on the Sonicwall SMA1000 line of products catering
                      the Enterprise customers with Secure Remote Access and
                      Wireless module of the Sonicwall Firewall devices runnning
                      on SonicOS.
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span className="exp_work">Patents</span>
                <ul>
                  <li>
                    <div className="exp_title">
                      Co-authored a patent in USPTO (&nbsp;
                      <a
                        href="https://www.patentguru.com/US2021165899A1"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Patent Link"
                        aria-label="Patent Link"
                        className="project__links__highlight"
                      >
                        US2021165899A1
                      </a>
                      &nbsp;) , titled 'Call Location Based Access Control of
                      Query to Database' to protect databases from unknown or
                      unfamiliar requests.
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
