import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "./Contact.module.css";
import { Header, Button } from "../../common";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    alert("Message Sent");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
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
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className={style.container}>
      <Header title="Contact" />
      <main className={style.contactContainer}>
        <form className={style.contactForm} onSubmit={sendEmail}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            value={formData.firstName} // Updated to use formData.firstName
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName} // Updated to use formData.lastName
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message: "
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
