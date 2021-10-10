import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Cart = ({ cartArr }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant='h3'>You have no item</Typography>
  );
  var sum = 0;
  const FiledCart = () => (
    <Grid container spacing={3}>
      {cartArr.map((val, index) => {
        console.log(val);
        sum = sum + Number(val);
        console.log(sum);
        return (
          <div key={index} style={{ fontSize: "2rem", marginTop: "2rem" }}>
            <div style={{ margin: ".5rem", display: "block", width: "100%" }}>
              <span>Item {index + 1} Price is </span> {val}
            </div>
          </div>
        );
      })}
      <div style={{ fontSize: "2rem", marginTop: "6rem" }}>Total is {sum}</div>
    </Grid>
  );
  return (
    <div>
      <Container>
        <div className={classes.toolbar} />
        <Typography variant='h3'>Your Shopping Cart</Typography>
        {!cartArr.length ? <EmptyCart /> : <FiledCart />}
      </Container>
    </div>
  );
};

export default Cart;
