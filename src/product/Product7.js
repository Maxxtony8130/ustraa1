import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product4() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Skin</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Because well groomed skin can lead to more kisses.
        </p>
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/de-tan-cream.webp"
          name=" De-Tan Cream for Men - Set of 2
          "
          price="425"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/1_53_5_1.webp"
          name=" Lip Balm & Body Lotion
          "
          price="522"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/9new-packs_april.webp"
          name=" De-Tan Cream for Men and Lip Balm Set of 2
          "
          price="523"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/de-tan_face_cream-_50gm.webp"
          name=" De-Tan Cream for Men
          "
          price="205"
          weight="(50 ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/18_3.webp"
          name="Moisturising Cream for Oily Skin - 100g
          "
          price="280"
          weight="(100 g)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/m-cream_front-1100x1100.webp"
          name=" Moisturising Cream for Dry Skin - 100g
          "
          price="350"
          weight="(100 g)"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bundle_4.webp"
          name="De-Tan Face Mask - Oily Skin - 125 g
          "
          price="239"
          weight="(125 g)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/ustraa-body-lotion-for-men.webp"
          name=" Ustraa Body Lotion - 200 ml
          "
          price="399"
          weight="(200ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/10_18.webp"
          name=" De-Tan Face Mask - Dry Skin - 125 g
          "
          price="239"
          weight="(125 g)"
        />
      </div>
    </div>
  );
}
export default Product4;
