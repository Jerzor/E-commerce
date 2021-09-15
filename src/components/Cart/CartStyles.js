import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";

export const StyledButton = withStyles({
  root: {
    width: 170,
    height: 50,
    marginBottom: 20,
  },
})(Button);

export const DivGrid = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 50px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: ${({ divWidth }) => divWidth && "360px"};

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;
