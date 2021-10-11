import extLogo from "./images/icons8-external-link.svg";
import githubLogo from "./images/icons8-github.svg";

function Project(props) {
  var techList = [];

  for (var a of props.techList) {
    techList.push(<li key={`pro${a}`}>{a}</li>);
  }

  return (
    <div className="project-info">
      <div className={`project__image ${props.position}`}>
        <a
          href={props.externalLink}
          aria-label="External Link"
          rel="noopener noreferrer"
          title="External Link"
          target="_blank"
        >
          <img
            src={props.imageSrcURL}
            alt={props.altText}
            className="portfolio-thumbnail"
          />
        </a>
      </div>
      <div className={`project__content ${props.position}`}>
        <h3 className={`project__title ${props.allign}`}>
          {props.projectTitle}
        </h3>

        <div className="project__description">{props.projectDescription}</div>

        <ul className={`project__tech-list ${props.allign}`}>{techList}</ul>
        <div className={`project__links ${props.allign}`}>
          {props.githubLink != null ? (
            <a
              href={props.githubLink}
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              title="GitHub Link"
              target="_blank"
            >
              <img src={githubLogo} alt="" className="project__link-icon" />
            </a>
          ) : null}
          {props.externalLink != null ? (
            <a
              href={props.externalLink}
              aria-label="External Link"
              rel="noopener noreferrer"
              title="External Link"
              target="_blank"
            >
              <img src={extLogo} alt="" className="project__link-icon" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Project;
