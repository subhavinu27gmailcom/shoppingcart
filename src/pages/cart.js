import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart,
  decrement,
  increment,
  products,
} from "../redux/counterslice";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function Cart({ prod }) {
  const dispatch = useDispatch();
  const { cartlist, productsarray } = useSelector((state) => {
    return state.counter;
  });

  // console.log(prod)
  // console.log(cartlist)

  const cartcount = cartlist.find((item) => item?._id === prod?._id)?.count;
  // console.log(productsarray)

  //console.log(cartcount,"==cartcount")
  //useEffect(()=>{
  // dispatch(products())
  //} ,[]);

  return (
    <div>
      {cartcount > 0 ? (
        <p>
          <Button
            onClick={() => {
              dispatch(increment(prod._id));
            }}
          >
            {" "}
            increment{" "}
          </Button>
          {cartcount}
          <Button
            onClick={() => {
              dispatch(decrement(prod._id));
            }}
          >
            {" "}
            decrement{" "}
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              dispatch(addtocart(prod));
            }}
          >
            Add to Cart
          </Button>
        </p>
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            dispatch(addtocart(prod));
          }}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}

export default Cart;
