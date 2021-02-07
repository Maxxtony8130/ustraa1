import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product2() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>TRIMMER</h5>
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/chrome_1__1.webp"
          name="Ustraa Chrome - Lithium Powered Beard Trimmer"
          price="1999"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/trimmer-w-bgo.webp"
          name="Growth & Grooming Kit"
          price="2608"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/trimmer-10.webp"
          name=" Ustraa Black - Lithium Powered Beard Trimmer "
          price="1699"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl=" https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/website_pic_2.webp"
          name=" Ustraa Chrome Trimmer,Face Wash,Lip Balm"
          price="2798"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/razor_-_orange.webp"
          name="Ustraa 5 Blade Razor - Orange"
          price="211"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/razor_-_black_1.webp"
          name="Ustraa 5 Blade Razor - Blue "
          price="211"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/razor_-_black-1.webp"
          name=" Ustraa 5 Blade Razor - Black "
          price="211"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/ustraa-gear-5---cartridge---pack-of-4.webp"
          name=" Ustraa Gear 5 - Cartridge - Pack of 4 "
          price="599"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/orange-razor-with-blades.webp"
          name=" Ustraa Complete Gear Pack - Orange"
          price="1020"
        />
      </div>
    </div>
  );
}
export default Product2;
