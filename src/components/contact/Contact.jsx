import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './contact.css';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ status: "", message: "" });

  const handleSubmitSheet = (e) => {
    e.preventDefault();
    const form = e.target;

    setIsLoading(true);
    setAlert({ status: "", message: "" });

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzuDGbdP8W7pkX1D_1485WEX-eJ4I9oGBLKdZX1h6hpgZzYioSr0bIFeBBubsOxHoOg/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Thank you for sending me messaage",
          icon: "success"
        });

        setAlert({
          status: "success",
          message: "Message sent successfully!",
        });
        form.reset();
      })
      .catch((error) => {
        setAlert({
          status: "error",
          message: `Failed to send message: ${error.message}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className='contact__details'>Don't like forms? Send me an email. 👋</p>
        </div>

        <form className='contact__form' onSubmit={handleSubmitSheet}>
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className='contact__form-input'
                placeholder='Insert your name'
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className='contact__form-input'
                placeholder='Insert your email'
                required
              />
            </div>

          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className='contact__form-input'
              placeholder='Insert your subject'
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols={30}
              rows={10}
              className='contact__form-input'
              placeholder='Lets talking about...'
              required
            ></textarea>
          </div>

          <button type="submit" className='btn' disabled={isLoading}>
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;