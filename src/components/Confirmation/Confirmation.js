import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const Confirmation = ({ handleEmptyCart }) => {
  const history = useHistory();
  const confirm = () => {
    handleEmptyCart();
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="h2" gutterBottom style={{ color: "#357a38" }}>
        Payment accepted
      </Typography>

      <Button
        variant="contained"
        onClick={confirm}
        style={{ background: "#4caf50", color: "#fff" }}
      >
        Back to shop
      </Button>
    </div>
  );
};

export default Confirmation;
