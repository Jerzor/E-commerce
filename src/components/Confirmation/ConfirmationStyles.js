import styled from "styled-components";
import { Button, Typography, withStyles } from "@material-ui/core";

export const ConfirmationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const StyledTypography = withStyles({
  root: {
    color: "#18A558",
    textAlign: "center",
  },

  "@media (max-width: 599px)": {
    root: {
      fontSize: "50px",
      width: "80%",
    },
  },
})(Typography);

export const StyledButton = withStyles({
  root: {
    backgroundColor: "#18A558",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4caf50",
    },
  },
})(Button);
