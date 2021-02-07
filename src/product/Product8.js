import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product4() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Shave</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          For best results use often, for even better results smile when you
          meet her.
        </p>
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/ustraa-gear-5---cartridge---pack-of-4.webp"
          name="Ustraa Gear 5 - Cartridge - Pack of 4
          "
          price="599"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/razor_-_orange.webp"
          name=" Ustraa 5 Blade Razor - Orange
          "
          price="211"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/razor_-_black_1.webp"
          name="Ustraa 5 Blade Razor - Blue
          "
          price="211"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/razor_-_black-1.webp"
          name="Ustraa 5 Blade Razor - Black
          "
          price="211"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/black-razor-with-blades.webp"
          name=" Ustraa Complete Gear Pack - Black
          "
          price="1020"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/blue-razor-with-blades.webp"
          name=" Ustraa Complete Gear Pack - Blue
          "
          price="1020"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/shaper_duo.webp"
          name="Ustraa Gear Beard Styler - Trimmer
          "
          price="791"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/hair-growth-cream-_-gear-5-black.webp"
          name=" Shave & Hair Growth Pack
          "
          price="783"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/chrome_1__1.webp"
          name=" Ustraa Chrome - Lithium Powered Beard Trimmer
          "
          price="1999"
        />
      </div>
    </div>
  );
}
export default Product4;
