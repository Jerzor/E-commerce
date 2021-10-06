import { Container, Paper, Typography } from "@material-ui/core";
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
    width: "80%",

    "&:first-child": {
      margin: "20px 0",
    },
  },

  "@media (min-width: 750px)": {
    root: {
      marginTop: 20,
      width: "45%",
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

export const StyledItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  @media (min-width: 500px) {
    flex-direction: row;
  }
  @media (min-width: 750px) {
    flex-direction: column;
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const StyledTypography = styled(Typography)`
  @media (min-width: 500px) {
    margin-left: auto !important;
  }
  @media (min-width: 750px) {
    margin-left: 0 !important;
  }
  @media (min-width: 900px) {
    margin-left: auto !important;
  }
`;

export const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;
