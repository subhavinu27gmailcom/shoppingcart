import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function Adminproduct() {
  const [available, seta] = useState("");
  const [item, setitem] = useState([]);
  const [name, setname] = useState("");
  const [description, setd] = useState("");
  const [prize, setp] = useState("");

  const { id } = useParams();

  useEffect(() => {
    console.log(id);

    axios
      .post(`http://localhost:3001/adminproductview/${id}`)
      .then(function (response) {
        if (response) {
          setitem(response.data);
          console.log(response);
        }
      });
  }, []);
  function edit() {
    console.log(prize);
    axios
      .post(`http://localhost:3001/adminproductedit/${id}`, {
        name,
        prize,
        description,
        available,
      })
      .then(function (response) {
        if (response) {
          setitem(response.data);
          console.log(response);
        }
      });
  }

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
              Qty:<Button> - </Button>
              {item.quantity}
              <Button> + </Button>
            </p>
          </div>
          <form onSubmit={edit}>
            <input
              type="text"
              placeholder="prize"
              value={prize}
              onChange={(e) => {
                setp(e.target.value);
              }}
            />
            <input
              type="Boolean"
              placeholder="available"
              value={available}
              onChange={(e) => {
                seta(e.target.value);
              }}
            />

            <input type="submit" value="edit" />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Adminproduct;
