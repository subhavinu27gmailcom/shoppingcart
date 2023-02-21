import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [description, setd] = useState("");
  const [prize, setp] = useState("");
  const [quantity, setq] = useState("");
  const [prodetails, setpr] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3001/addproducts2", {})
      .then(function (response) {
        if (response) {
          setpr(response.data);
        }
      });
  }, []);

  function edit() {
    axios
      .post("http://localhost:3001/addproducts3/{id}", { prize: 14345 })
      .then(function (response) {
        if (response) {
          console.log(response.data);
        }
      });
  }

  function addpro(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/addproducts1", {
        name,
        description,
        prize,
        quantity,
      })
      .then(function (response) {
        if (response) {
          console.log(response);
          setpr(response.data);
          console.log(prodetails);
        }
      });
  }

  return (
    <div>
      <form onSubmit={addpro}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setd(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="prize"
          value={prize}
          onChange={(e) => {
            setp(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => {
            setq(e.target.value);
          }}
        />
        <input type="submit" value="addproduct" />
      </form>

      {prodetails.map((item) => {
        return (
          <Card
            className="shadow p-3 mb-5 bg-body rounded "
            style={{ width: "18rem" }}
          >
            <Card.Img variantproducts="top" src="holder.js/100px180" />
            <Link to={`/adminproductview/${item._id}`}>
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
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export default Admin;
