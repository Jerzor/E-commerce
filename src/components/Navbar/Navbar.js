import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import logo from "assets/logo.svg";

const Navbar = ({ cartQnt }) => {
  return (
    <>
      <AppBar position="sticky" style={{ marginBottom: 25 }}>
        <Container maxWidth="lg">
          <Toolbar
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <img src={logo} alt="logo" style={{ width: 70 }} />
            </Link>

            <Typography variant="h6" style={{ marginLeft: 15, flexGrow: 1 }}>
              E-commerce
            </Typography>

            <Link to="/cart" style={{ color: "inherit" }}>
              <IconButton color="inherit">
                {cartQnt ? (
                  <Badge badgeContent={cartQnt} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                ) : (
                  <Badge badgeContent={0} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                )}
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
