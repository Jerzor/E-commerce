import styled from "styled-components";
import { withStyles } from "@material-ui/styles";
import { Button, Card, CardActionArea } from "@material-ui/core";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCardActionArea = styled(CardActionArea)`
  flex-grow: 1;
`;

export const StyledButton = withStyles({ root: { margin: "0 auto" } })(Button);
