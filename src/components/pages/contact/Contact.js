import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s6q61tt",
        "contact_form",
        e.target,
        "v5s6sK-NINaZ_1wli"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <Box sx={{ bgcolor: "#F6F6F6", pt: "11vh", pb: "11vh" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "common.white",
            borderRadius: "8px",
            p: 4,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" fontFamily="Edu VIC WA NT Beginner, cursive">
            Contact Me
          </Typography>
          <Box
            component="form"
            onSubmit={sendEmail}
            sx={{ mt: 2, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  required
                  label="Name"
                  type="text"
                  name="user_name"
                  fullWidth
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  required
                  label="Email"
                  type="email"
                  name="user_email"
                  fullWidth
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  required
                  label="Message"
                  type="text"
                  multiline
                  rows={4}
                  name="message"
                  fullWidth
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#2ECC71",
                    color: "#FFF",
                    "&:hover": {
                      bgcolor: "#27AE60",
                    },
                  }}
                  fullWidth
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
