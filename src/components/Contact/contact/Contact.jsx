import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "./Contact.module.css";
import { Header, Button } from "../../common";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    alert("Message Sent");
    setFormData({ name: "", email: "", message: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwat4g4",
        "contact_form",
        e.target,
        "v5s6sK-NINaZ_1wli"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Handle success
          clearForm();
        },
        (error) => {
          console.log(error.text);
          // Handle errors
        }
      );
  };

  return (
    <section id="contact" className={style.container}>
      <Header title="Contact" />
      <main className={style.contactContainer}>
        <form className={style.contactForm} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <Button title="Submit" type="submit" className={style.submitButton} />
        </form>
      </main>
    </section>
  );
};

export default Contact;