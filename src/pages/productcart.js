import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import {
  products,
  removecartitem,
  showproductcart,
} from "../redux/counterslice";

function Productcart() {
  const dispatch = useDispatch();
  const { cartlist } = useSelector((state) => {
    return state.counter;
  });
  console.log(cartlist);
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>prize</th>
            <th>count</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {cartlist.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td> <td> {item.prize}</td>
                <td> {item.count}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(removecartitem(item._id));
                    }}
                  >
                    {" "}
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Productcart;
