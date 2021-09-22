import extLogo from "./images/icons8-external-link.svg";
import githubLogo from "./images/icons8-github.svg";

function SmallProject(props) {
  var techList = [];
  for (var a of props.techList) {
    techList.push(<li key={`smo${a}`}>{a}</li>);
  }
  return (
    <div className="project-small__card">
      <div className={`project__links__small`}>
        {props.githubLink != null ? (
          <a
            href={props.githubLink}
            aria-label="Github Link"
            rel="noopener noreferrer"
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
            target="_blank"
          >
            <img src={extLogo} alt="" className="project__link-icon" />
          </a>
        ) : null}
      </div>
      <h3 className="project-small_title">{props.title}</h3>
      <div className="project-small__desc">{props.desc}</div>
      <ul className={`project__tech-list small`}>{techList}</ul>
    </div>
  );
}

export default SmallProject;
