import emailjs from "emailjs-com";
import { useRef } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      );
      console.log(result.text);
      e.target.reset();
      alert("Email Sent");
    } catch (error) {
      console.log(error.text);
    }
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
