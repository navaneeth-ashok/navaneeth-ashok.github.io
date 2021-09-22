import cameraLogo from "./images/photo_camera_black_36dp.svg";
function Welcome() {
  return (
    <div id="welcome-screen" role="banner">
      <div id="welcome-elements">
        <h1>
          hi,<span className="nline"></span>i'm{" "}
          <span id="wlc_name">navaneeth ashok</span>
        </h1>
        <ul id="wlc_list">
          <li className="wlc-txt">
            <span className="wlc-txt__main">developer.</span>
            <span className="wlc-txt__alt code">
              console.log(`hello world!`)
            </span>
          </li>
          <li className="wlc-txt">
            <span className="wlc-txt__main">designer.</span>
            <span className="wlc-txt__alt">
              <span id="wlc-txt-clr1">d</span>
              <span id="wlc-txt-clr2">e</span>
              <span id="wlc-txt-clr3">s</span>
              <span id="wlc-txt-clr4">i</span>
              <span id="wlc-txt-clr5">g</span>
              <span id="wlc-txt-clr6">n</span>
              <span id="wlc-txt-clr7">e</span>
              <span id="wlc-txt-clr8">r</span>
              <span id="wlc-txt-clr9"> &#128396;</span>
            </span>
          </li>
          <li className="wlc-txt">
            <span className="wlc-txt__main">photographer.</span>
            <span className="wlc-txt__alt">
              <img src={cameraLogo} alt="camera" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Welcome;
