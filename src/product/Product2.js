import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product2() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>COLOGNE</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Lasting Fragrances For Men
        </p>
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/malt1_4_1.webp"
          name="Malt - Perfume for Men - 100ml"
          price="1499"
          weight="(100ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/fragrance-bundle---after-dark.webp"
          name="Fragrance Bundle - After Dark - Perfume for Men "
          price="1518"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/insignia1_5.webp"
          name="Insignia - Perfume For Men - 100ml"
          price="1499"
          weight="(100ml)"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/fragrance-bundle---tattoo.webp"
          name="Fragrance Bundle - Tattoo - Perfume for Men"
          price="1598"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/cologne-spray_1.webp"
          name="Fragrance Bundle - Ammunition - Perfume for Men"
          price="1235"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/afterdark-ammunition_1_.webp"
          name="Fragrance Bundle - Ammunition & After Dark "
          price="1377"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/tattoo_afterdark.webp"
          name="Fragrance Bundle - Tattoo & Afterdark  "
          price="1518"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/6_34_1.webp"
          name="Fragrance Bundle - Tattoo & Ammunition - Perfume "
          price="1377"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/2_112.webp"
          name="Tattoo Cologne - 100 ml - Perfume for Men"
          price="650"
          weight="(100ml)"
        />
      </div>
    </div>
  );
}
export default Product2;
