import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product4() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Face & Body</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Ustraa range of Face Wash and Face Scrubs for a refreshing shower.
        </p>
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bws_20_.webp"
          name="Body Wash - Activated Charcoal"
          price="478"
       
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/facewash-facescrub_1.webp"
          name="Face Wash - Oily Skin & Face Scrub"
          price="526"
       
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/6_36.webp"
          name="Body Wash for Men - Taurine"
          price="318"
          weight="(200 ml)"
       
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/4_80.webp"
          name="Body Wash for Men - Activated Charcoal "
          price="318"
          weight="(200 ml)"

       
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/5_67.webp"
          name="Body Wash for Men - Green Clay"
          price="318"
          weight="(200 ml)"

       
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/face-wash-for-oily-skin.webp"
          name="Face Wash - Oily Skin (Checks Acne & Oil Control)"
          price="199"
       
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/set-of-4-sea-mineral.webp"
          name="Ustraa Deo Soap For Men with Sea Minerals"
          price="220"
          weight="(100 gm)"

       
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/set-of-4-activated-charcoal-soap.webp"
          name="Ustraa Deo Soap For Men with Activated Charcoal"
          price="699"
          weight="(100 gm)"
       
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/face-wash-_neem_charcoal__front_1100x1100_1.webp"
          name="Face Wash Acne Control - With Neem & Charcoal"
          price="199"
          weight="(100 gm)"

       
        />
      </div>
    </div>
  );
}
export default Product4;
