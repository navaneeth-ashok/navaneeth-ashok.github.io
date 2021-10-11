import { useState } from "react";
import close from "./images/close_white_18dp.svg";

function Contact() {
  const [mailOk, setMailStatus] = useState("");
  const [messageSending, setSendingStatus] = useState(false);
  const [showInfo, setInfoStatus] = useState(false);
  const [showMail, setMailButton] = useState(true);
  const [namePresent, setNameStatus] = useState(false);
  const [emailPresent, setEmailStatus] = useState(false);
  const [commPresent, setCommStatus] = useState(false);
  const [emailValid, setEmailValidity] = useState(false);

  function emailValidator(email) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/i.test(email)) {
      setEmailValidity(true);
      setEmailStatus(true);
    } else {
      setEmailValidity(false);
    }
  }

  function sendMail(event) {
    event.preventDefault();
    document.getElementById("err-message").innerHTML = ``;
    let name = document.getElementById("contact__name").value;
    let email = document.getElementById("contact__email").value;
    let comment = document.getElementById("cmt").value;

    document.getElementById("contact__name").style.borderColor = "#363636";
    document.getElementById("contact__email").style.borderColor = "#363636";
    document.getElementById("cmt").style.borderColor = "#363636";

    if (name === null || name === "" || name === undefined) {
      document.getElementById("contact__name").style.borderColor = "red";
    } else {
      document.getElementById("contact__name").style.borderColor = "#363636";
    }

    if (email === null || email === "" || email === undefined) {
      document.getElementById("contact__email").style.borderColor = "red";
    } else if (!emailValid) {
      document.getElementById("contact__email").style.borderColor = "red";
    } else {
      document.getElementById("contact__name").style.borderColor = "#363636";
    }

    if (comment === null || comment === "" || comment === undefined) {
      document.getElementById("cmt").style.borderColor = "red";
    } else {
      document.getElementById("cmt").style.borderColor = "#363636";
    }

    if (!(namePresent && emailPresent && commPresent)) {
      document.getElementById(
        "err-message"
      ).innerHTML = `<p>Missing contact form fields</p>`;
      return false;
    } else if (emailValid === false) {
      document.getElementById("err-message").innerHTML = `<p>Invalid Email</p>`;
      return false;
    } else {
      document.getElementById("err-message").innerHTML = ``;
    }

    let data = {
      name: name,
      email: email,
      comment: comment,
    };
    setSendingStatus(true);
    fetch(
      "https://xt4gf2t2n8.execute-api.ca-central-1.amazonaws.com/dep1/contact-us",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          setMailStatus(true);
          setInfoStatus(true);
          setSendingStatus(false);
        } else {
          setMailStatus(false);
          setInfoStatus(true);
          setMailButton(false);
          setSendingStatus(false);
        }
      })
      .catch(() => {
        setMailStatus(false);
        setInfoStatus(true);
        setMailButton(false);
        setSendingStatus(false);
      });
  }

  return (
    <section id="contact">
      <div className="page-container">
        <h2 className="section-headings">Contact</h2>
        <div id="contact-flex">
          <div id="contact-form">
            <form method="post" action="" className="form">
              <div className="input-container">
                <i className="person-icon contact-icon"></i>
                <input
                  className="input-field"
                  type="text"
                  placeholder="name"
                  name="name"
                  id="contact__name"
                  title="Name"
                  aria-label="Name"
                  required
                  onChange={(e) => {
                    if (
                      e.target.value === "" ||
                      e.target.value === null ||
                      e.target.value === undefined
                    ) {
                      setNameStatus(false);
                    } else {
                      setNameStatus(true);
                    }
                  }}
                />
              </div>
              <div className="input-container">
                <i className="email-icon contact-icon"></i>
                <input
                  className="input-field"
                  type="text"
                  placeholder="email"
                  name="email"
                  id="contact__email"
                  title="Email"
                  aria-label="Email"
                  required
                  onChange={(e) => {
                    if (
                      e.target.value === "" ||
                      e.target.value === null ||
                      e.target.value === undefined
                    ) {
                      setEmailStatus(false);
                    } else {
                      setEmailStatus(true);
                      emailValidator(e.target.value);
                    }
                  }}
                />
              </div>
              <div className="input-container">
                <i className="comment-icon contact-icon"></i>
                <textarea
                  className="input-field input-field-txt"
                  id="cmt"
                  name="cmt"
                  rows="4"
                  cols="50"
                  placeholder="comment"
                  title="Comment"
                  aria-label="Comment"
                  required
                  onChange={(e) => {
                    if (
                      e.target.value === "" ||
                      e.target.value === null ||
                      e.target.value === undefined
                    ) {
                      setCommStatus(false);
                    } else {
                      setCommStatus(true);
                    }
                  }}
                ></textarea>
              </div>
              <div className="text-center" id="err-message"></div>
              <div className="input-container">
                <button type="submit" className="btn" onClick={sendMail}>
                  {messageSending ? "Sending" : "Submit"}
                </button>
              </div>
              <div
                className={showInfo === false ? null : "form-result exp__card"}
              >
                {showInfo ? (
                  mailOk ? (
                    <div>
                      <div
                        className="close-button"
                        onClick={() => {
                          setInfoStatus(false);
                        }}
                      >
                        <img src={close} alt="close" />
                      </div>
                      <p>Thank you for contacting</p>
                      <p>The enquiry has been successfully sent</p>
                      <p>I will get back to you soon</p>
                    </div>
                  ) : (
                    <div className="contact__error">
                      <div
                        className="close-button"
                        onClick={() => {
                          setInfoStatus(false);
                          setMailButton(true);
                        }}
                      >
                        <img src={close} alt="close" />
                      </div>
                      <p>There was an error trying to send your message</p>
                      <p>Would you like to communicate over email?</p>
                      <p>Click on 'Say Hi'</p>
                      <div className="text-center">
                        <a
                          className="hello"
                          href="mailto:hi@navaneeth.dev?subject=Hi Navaneeth"
                        >
                          <span className="contact__say-hello error">
                            Say Hi
                          </span>
                        </a>
                      </div>
                    </div>
                  )
                ) : null}
              </div>
              {showMail ? (
                <div className="text-center mail">
                  If you prefer email, Say Hi at{" "}
                  <a
                    className="hello"
                    href="mailto:hi@navaneeth.dev?subject=Hi Navaneeth"
                  >
                    <span className="contact__say-hello">hi@navaneeth.dev</span>
                  </a>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
