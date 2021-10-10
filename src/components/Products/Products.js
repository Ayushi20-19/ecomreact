import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
import CategoryMenu from "../CategoryMenu/CategoryMenu";


const Products = ({ items, filterMenu, allCatValues, clickCartHandler }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <CategoryMenu filterMenu={filterMenu} catItems={allCatValues} />
      <Grid container justify='center' spacing={4}>
        {items.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} clickCartHandler={clickCartHandler} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
