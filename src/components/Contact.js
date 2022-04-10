import border2 from "../img/border2.png";
import emailIcon from "../img/email.png";

function Contact() {
  return (
    <section className="contact" id="contact">
      <img className="border" src={border2} alt="section border" />
      <div className="container">
        <h1>Get in touch</h1>
        <form action="">
          <img className="email-icon" src={emailIcon} alt="email icon" />
          <span className="form-intro-text">Let's talk!</span>
          <br />
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message here..."
          ></textarea>
          <button type="submit" className="button">
            <span>Send</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
