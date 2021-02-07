import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product4() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Accessories</h5>
      </div>
      <div className="product__row">
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/helmet-spray-2_1.webp"
          name="Helmet & Disinfectant Spray - Set of 2
          "
          price="342"
        />
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bikers-pack_1.webp"
          name="The Bikers Pack
          "
          price="504"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/ustraa_comb_set.webp"
          name="Beard Comb Set (Set of 3)
          "
          price="695"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.5"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/6_37.webp"
          name="Ustraa Travel Kit - Brown
          "
          price="573"
        />
        <ProductList
          rating="3.9"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/5_70.webp"
          name="Ustraa Travel Kit - Blue
          "
          price="573"
        />
        <ProductList
          rating="3.7"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/img_6363.webp"
          name="Helmet Spray
          "
          price="180"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.1"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/chrome_1__1.webp"
          name="Ustraa Chrome - Lithium Powered Beard Trimmer
          "
          price="1999"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/ustraa-black---lithium-powered-beard-trimmer-_-beard-oil-4x4.webp"
          name="Ustraa Black - Lithium Powered Beard Trimmer & Beard Oil 4x4
          "
          price="1846"
        />
        <ProductList
          rating="4.6"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/trimmer-10.webp"
          name="Ustraa Black - Lithium Powered Beard Trimmer
          "
          price="1619"
        />
      </div>
    </div>
  );
}
export default Product4;
