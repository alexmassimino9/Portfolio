import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ButtonGroup, Link, Container } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "lavender",
          height: "10vh",
          justifyContent: "center",
        }}
      >
        <ButtonGroup
          size="large"
          variant="text"
          sx={{
            backgroundColor: "lightgreen",
            alignSelf: "flex-end",
          }}
        >
          <Button>
            <Link variant="h5" underline="hover" href="#">
              Home
            </Link>
          </Button>
          <Button>
            <Link variant="h5" underline="hover" href="#">
              About
            </Link>
          </Button>
          <Button>
            <Link variant="h5" underline="hover" href="#">
              Contact
            </Link>
          </Button>
          <Button>
            <Link variant="h5" underline="hover" href="#">
              four
            </Link>
          </Button>
        </ButtonGroup>
      </AppBar>
      <Container
        sx={{
          backgroundColor: "white",
          height: "150vh",
        }}
      ></Container>
    </Box>
  );
}
