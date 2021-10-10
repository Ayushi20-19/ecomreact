import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { Link } from "react-router-dom";
const Navbar = ({ onAddToCart }) => {
  const classes = useStyles();
  console.log(onAddToCart);
  return (
    <div>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to='/' variant='h6'>
            LOGO
          </Typography>
          <div className={classes.grow}>
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='Show cart Items'
                color='inherit'>
                <Badge badgeContent={onAddToCart} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
