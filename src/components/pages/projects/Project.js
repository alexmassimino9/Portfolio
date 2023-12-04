import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Project = ({ project }) => {
  const { name, url, img, code, tech, bio } = project;

  const handleViewDemoClick = () => window.open(url, "_blank").focus();
  const handleViewCodeClick = () => window.open(code, "_blank").focus();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          },
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt={name}
          sx={{ objectFit: "cover", objectPosition: "center" }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: "0.5rem",
              fontFamily: "Montserrat",
              fontWeight: 600,
              color: "#333",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: "1rem",
              fontFamily: "Roboto",
              fontWeight: 300,
              color: "#666",
              flex: "1",
            }}
          >
            {bio}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {tech.split(",").map((t, index) => (
              <Typography
                key={index}
                variant="body2"
                color="secondary"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              >
                {t.trim()}
              </Typography>
            ))}
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Button
            size="large"
            variant="contained"
            onClick={handleViewDemoClick}
            sx={{
              fontFamily: "Roboto",
              fontWeight: 500,
              backgroundColor: "#2ECC71",
              color: "white",
              "&:hover": { backgroundColor: "#27AE60" },
            }}
          >
            View Demo
          </Button>
          <Button
            size="large"
            variant="outlined"
            onClick={handleViewCodeClick}
            sx={{
              fontFamily: "Roboto",
              fontWeight: 500,
              color: "#2ECC71",
              borderColor: "#2ECC71",
            }}
          >
            View Code
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;
