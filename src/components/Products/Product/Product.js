import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { useState } from "react";

const Product = ({ product, clickCartHandler }) => {
  const classes = useStyles();
  const [des, setDes] = useState("none");
  const clickHandler = () => {
    setDes("block");
    console.log(des);
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image=''
          title={product.name}></CardMedia>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='h5' gutterBottom>
              {product.title}
            </Typography>
          </div>
          <Typography variant='h5'>${product.price}</Typography>
          <button style={{ padding: ".6rem" }} onClick={clickHandler}>
            Read Description
          </button>
          <div style={{ display: des }}> {product.description}</div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            arial-label='Add to Cart'
            onClick={(e) => clickCartHandler(product.title, product.price)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
