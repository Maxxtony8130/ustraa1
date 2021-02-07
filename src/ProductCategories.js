import { IconButton } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./ProductCategories.css";
function ProductCategories() {
  const history = useHistory();
  const essential = () => {
    history.push("/essential");
  };
  const cologne = () => {
    history.push("/cologne");
  };
  const trimmer = () => {
    history.push("/trimmer");
  };
  const face = () => {
    history.push("/face");
  };
  const beard = () => {
    history.push("/beard");
  };
  const hair = () => {
    history.push("/hair");
  };
  const skin = () => {
    history.push("/skin");
  };
  const shave = () => {
    history.push("/shave");
  };
  const accessories = () => {
    history.push("/accessories");
  };
  const home = () => {
    history.push("/");
  };

  return (
    <div className="productCateroies">
      <p onClick={home}>SALES</p>
      <p onClick={essential}>ESSENTIAL</p>
      <p onClick={cologne}>COLOGNE</p>
      <p onClick={trimmer}>TRIMMER</p>
      <p onClick={face}>FACE & BODY</p>
      <p onClick={beard}>BEARD</p>
      <p onClick={hair}>HAIR</p>
      <p onClick={skin}>SKIN</p>
      <p onClick={shave}>SHAVE</p>
      <p onClick={accessories}>ACCESSORIES</p>
      <IconButton style={{ color: "black" }}>
        <ShoppingCartIcon style={{ marginBottom: "3px" }} />
      </IconButton>
    </div>
  );
}

export default ProductCategories;
