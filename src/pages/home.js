import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addtocart,
  increment,
  decrement,
  products,
} from "../redux/counterslice";
import Cart from "./cart";
import Productcart from "./productcart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const { cartlist, productsarray } = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  const [product, setproducts] = useState([]);
  const navigate = useNavigate();

  //useEffect(()=>{axios.get("http://localhost:3001/products1copy") . then (function (response){if(response){
  //setproducts(response.data)

  //}})},[]);
  useEffect(() => {
    dispatch(products());
  }, []);

  console.log(cartlist);
  return (
    <section>
      <Container fluid>
        <Row>
          {productsarray.map((item) => {
            return (
              <Col sm={3}>
                <div>
                  <Card
                    className="shadow p-3 mb-5 bg-body rounded "
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variantproducts="top" src="holder.js/100px180" />

                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <h5> Prize:{item.prize}</h5>
                    </Card.Body>
                    <h>
                      {" "}
                      <Cart prod={item} />
                    </h>
                  </Card>
                </div>
              </Col>
            );
          })}
          ;
        </Row>
      </Container>
    </section>
  );
}

export default Home;
