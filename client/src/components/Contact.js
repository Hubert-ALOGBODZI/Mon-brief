import acctof4 from "../images/pexels-pavel-danilyuk-5998516.jpg";
import acctof3 from "../images/logo.png";
import acctof from "../images/pexels-ivan-samkov-4989168.jpg";
import "../CSS/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e4l2yhs",
        "template_8krr13h",
        form.current,
        "I5gL5ItLC8q9msDPN"
      )
      .then(
        (result) => {
          console.log(result.text);
        //   console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function refreshPage(e){ 
    window.location.reload(); 
  //   e.preventDefault();
  // console.log('Le lien a été cliqué.');
}

  return (
    <div className="main">
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
      <div
        className="bloc"
        style={{
          backgroundImage: `url(${acctof4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>CONTACT</h1>
        <div className="bloc2">
          <div className="blocleft">
            <div className="localisation">
              <img
                src={acctof3}
                style={{ width: "100%", height: "100%", paddingTop: 9 }}
                alt=""
              />
            </div>
            <div className="petitbloc">
              <div className="mail"></div>
              <div className="num"></div>
            </div>
          </div>

          <form className="blocright" ref={form} onSubmit={sendEmail}>
            <div className="inputbloc">
              <div className="input1">
                <span>Name</span>
                <input
                  type="text"
                  name="user_name"
                  style={{ width: "73%", height: "70px" }}
                  placeholder="VOTRE NOM"
                />
              </div>
              <div className="input1">
                <span>Email *</span>
                <input
                  type="email"
                  name="user_email"
                  style={{ width: "73%", height: "70px" }}
                  placeholder="VOTRE MAIL"
                  required
                />
              </div>
            </div>
            <div className="area">
              <span>Votre message</span>

              <textarea cols="70" rows="7"
              name="user_message" required></textarea>
            </div>
            <br />
            <button onClick={ refreshPage } className={{}}>SEND</button>
            {/* <input type="submit" value="Send" /> */}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
