import { useState } from "react";
import close from "./images/close_white_18dp.svg";

function Contact() {
  const [mailOk, setMailStatus] = useState("");
  const [showInfo, setInfoStatus] = useState(false);
  const [showMail, setMailButton] = useState(true);
  function sendMail(event) {
    event.preventDefault();
    console.log("Form Clicked");
    let name = document.getElementById("contact__name").value;
    let email = document.getElementById("contact__email").value;
    let comment = document.getElementById("cmt").value;
    let data = {
      name: name,
      email: email,
      comment: comment,
    };
    fetch(
      "https://xt4gf2t2n8.execute-api.ca-central-1.amazonaws.com/dep1/contact-us",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setMailStatus(true);
          setInfoStatus(true);
        } else {
          setMailStatus(false);
          setInfoStatus(true);
          setMailButton(false);
        }
      })
      .catch(() => {
        setMailStatus(false);
        setInfoStatus(true);
        setMailButton(false);
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
                ></textarea>
              </div>
              <div className="input-container">
                <button type="submit" className="btn" onClick={sendMail}>
                  Submit
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
