import { Container, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";

export const StyledContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
  },

  "@media (min-width: 750px)": {
    root: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "start",
    },
  },
})(Container);

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;

  @media (min-width: 750px) {
    align-items: start;
  }

  @media (min-width: 1100px) {
    gap: 15px;
  }
`;

export const StyledPaper = withStyles({
  root: {
    marginTop: 30,
    width: "80%",
  },

  "@media (min-width: 750px)": {
    root: {
      width: "45%",
      marginTop: 0,
    },
  },

  "@media (min-width: 1000px)": {
    root: {
      width: "40%",
    },
  },
  "@media (min-width: 1200px)": {
    root: {
      width: "35%",
    },
  },
})(Paper);
