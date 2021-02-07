import React from "react";
import "./ProductList.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Button } from "@material-ui/core";
function ProductList({ rating, imgUrl, name, price, weight }) {
  return (
    <div className="productlist">
      <div className="productlist__rating">
        <div style={{ display: "flex",marginBottom:"10px" }}>
          <p style={{color: "grey"}}>{rating}</p>
          <StarRateIcon style={{color:"grey"}} />
        </div>
      </div>
      <div className="productlist__image">
        <img src={imgUrl} alt="imageurl" />
      </div>
      <div className="productlist__name">
        <p>{name}</p>
      </div>
      <div className="productlist__rate">
        <p>₹ {price}</p>
        <p style={{ color: "gray", fontSize: "10px" }}>{weight}</p>
      </div>
      <Button
        style={{
          minWidth: "200px",
          backgroundColor: "#2bc442",
          color: "white",
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
}

export default ProductList;
