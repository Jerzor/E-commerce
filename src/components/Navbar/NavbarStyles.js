import styled from "styled-components";
import { withStyles } from "@material-ui/styles";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const StyledAppBar = styled(AppBar)`
  margin-bottom: 25px;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  width: 100%;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

export const StyledImg = styled.img`
  width: 70px;
`;

export const StyledTypography = withStyles({
  root: {
    marginLeft: 15,
    flexGrow: 1,
  },
})(Typography);

export const StyledLink = styled(Link)`
  color: inherit;
`;
