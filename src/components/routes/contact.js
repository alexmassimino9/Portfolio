import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Container } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s6q61tt",
        "contact_form",
        form.current,
        "v5s6sK-NINaZ_1wli"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main style={{ backgroundColor: "var(--blue)" }}>
      <Container
        sx={{
          height: "100vh",
          bgcolor: "var(--white)",
          borderRadius: "8px",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h4"
          mb={10}
          fontFamily="'Edu VIC WA NT Beginner', cursive"
        >
          Send me a message:
        </Typography>
        <form ref={form} onSubmit={sendEmail} className="form">
          <TextField
            margin="dense"
            required
            label="Name: "
            type="text"
            name="user_name"
            className="form-control"
          />
          <TextField
            margin="dense"
            required
            label="Email: "
            type="email"
            name="user_email"
            className="form-control"
          />
          <TextField
            margin="dense"
            required
            label="Message: "
            type="text"
            multiline
            rows={4}
            name="message"
            className="form-control"
          />
          <Button
            type="submit"
            value="Send"
            variant="contained"
            className="form-control"
          >
            Submit
          </Button>
        </form>
      </Container>
    </main>
  );
};

export default Contact;
