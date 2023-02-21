import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addtocart, decrement } from "../redux/counterslice";
import { increment } from "../redux/counterslice";

function Singleproductviewuser() {
  const [available, seta] = useState("");
  const [item, setitem] = useState([]);
  const [name, setname] = useState("");
  const [description, setd] = useState("");
  const [prize, setp] = useState("");
  const { count1 } = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(count1);

  useEffect(() => {
    console.log(id);
    console.log(item);

    axios
      .post(`http://localhost:3001/singleproductviewuser/${id}`)
      .then(function (response) {
        if (response) {
          setitem(response.data);

          console.log(item);
        }
      });
  }, []);
  return (
    <div>
      return{" "}
      <Card
        className="shadow p-3 mb-5 bg-body rounded "
        style={{ width: "18rem" }}
      >
        <Card.Img variantproducts="top" src="holder.js/100px180" />

        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <h5> Prize: {item.prize}</h5>

          <div>
            <p>
              Qty:
              <Button
                onClick={() => {
                  dispatch(increment());
                }}
              >
                {" "}
                increment{" "}
              </Button>
              {count1}
            </p>
          </div>
          <Button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            {" "}
            decrement
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addtocart(item));
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Singleproductviewuser;
