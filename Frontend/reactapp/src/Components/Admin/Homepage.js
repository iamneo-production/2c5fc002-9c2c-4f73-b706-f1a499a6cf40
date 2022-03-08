import React from "react";
import Navbar from "./Navbar";
import Mainbody from "./Mainbody";
import AddItem from "./AddItem";

export default function Homepage(props) {
  return (
    <div>
      <Navbar />
      <br />
      <Mainbody
        data={props.data}
        onDelete={props.onDelete}
        onEditProduct={props.onEditProduct}
      />
      <br />
      <AddItem data={props.data} onAdd={props.onAdd} />
    </div>
  );
}
