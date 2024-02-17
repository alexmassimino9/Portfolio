import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import { Header } from "../common";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6cjmlpx",
      "contact_form",
      form.current,
      "v5s6sK-NINaZ_1wli"
    );
    alert("Form submited");
  };

  return (
    <section id="contact" className={style.container}>
      <Header title="Contact" />
      <main className={style.contactContainer}>
        <form className={style.contactForm} onSubmit={sendEmail} ref={form}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="user_firstName"
            name="user_firstName"
            placeholder="John"
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="user_lastName"
            name="user_lastName"
            placeholder="Doe"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="john@example.com"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message: "
          ></textarea>

          <input title="Submit" type="submit" className={style.submitButton} />
        </form>
      </main>
    </section>
  );
};

export default Contact;
