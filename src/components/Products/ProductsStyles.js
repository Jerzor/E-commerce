import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

export const StyledGridContainer = withStyles({
  root: {
    display: "grid",
    gridGap: 20,
  },
  "@media (min-width: 400px)": {
    root: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  "@media (min-width: 500px)": {
    root: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  "@media (min-width: 750px)": {
    root: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  "@media (min-width: 1050px)": {
    root: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
})(Container);

export const StyledFlexContainer = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
})(Container);
