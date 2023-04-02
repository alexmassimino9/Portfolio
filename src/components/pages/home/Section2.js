import { Typography, Box, Grid } from "@mui/material";

function SkillsSection() {
  return (
    <Box sx={{ textAlign: "center", margin: "2rem auto", maxWidth: "800px" }}>
      <Typography variant="h3" sx={{ marginBottom: "1.5rem", fontWeight: 700 }}>
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            Frontend Technologies
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            React, TypeScript, JavaScript, HTML, CSS, MUI
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            Backend Technologies
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            Node.js, Express, GraphQL, REST APIs, AWS Amplify
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            Databases
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            DynamoDB, MongoDB, MySQL
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            Cloud Services
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            AWS EC2, Lambda, S3, CloudFront, Route 53
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            Other Skills
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            Git, Agile Development, UI/UX Design, Testing
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SkillsSection;
