import React from "react";
import "./Product.css";
import ProductList from "./ProductList";
function Product1() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Essentials</h5>
      </div>
      <div className="product__row">
        <ProductList
          rating="4.8"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/web-1100x1100-set-of-2.webp"
          name="Heavy Duty Hand Sanitizer - 500 ml - Set of 2"
          price="500"
        />
        <ProductList
          rating="3.9"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bgo_ad_desktop.webp"
          name="Beard Growth Oil- Advanced - 60 ml"
          price="699"
          weight="(60ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/hair-vitalizer-serum-for-hair-growth_1_1_1.webp"
          name="Hair Growth Vitalizer - 100 ml "
          price="699"
          weight="(100ml)"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/price-matching-creatives1.webp"
          name="Hair Growth Kit"
          price="1228"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/super_detan_oil_pack_3.3.webp"
          name="Super De- Tan Oily Skin "
          price="629"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/beard-growth-oil.webp"
          name="Beard Growth Oil - 35 ml"
          price="399"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="3.8"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/chrome_1__1.webp"
          name="Ustraa Chrome - Lithium Powered Beard Trimmer"
          price="1999"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/neem--set-of-4-_-hand-rub---200-ml-copy-13.webp"
          name="Deo Soap - Neem - Pack of 4 & Hand Rub - 200 ml"
          price="320"
        />
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/neem-and-clay-pack-8.webp"
          name="Neem & Green Clay Soap, 100 g (Pack of 8) "
          price="440"
        />
      </div>
    </div>
  );
}
export default Product1;
