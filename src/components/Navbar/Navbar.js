import React from "react";
import { IconButton, Container, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import {
  StyledToolbar,
  StyledAppBar,
  StyledImg,
  StyledTypography,
  StyledLink,
} from "./NavbarStyles";

import logo from "assets/logo.svg";

const Navbar = ({ cartQnt }) => {
  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="lg">
          <StyledToolbar>
            <Link to="/">
              <StyledImg src={logo} alt="logo" />
            </Link>

            <StyledTypography variant="h6">E-commerce</StyledTypography>

            <StyledLink to="/cart">
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
            </StyledLink>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </>
  );
};

export default Navbar;
