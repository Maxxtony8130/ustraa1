import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product4() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Beard</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Give your beard the respect it deserves.
        </p>
      </div>
      <div className="product__row">
        <ProductList
          rating="3.8"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bgo_ad_desktop.webp"
          name="Beard Growth Oil- Advanced - 60 ml"
          price="699"
          weight="(60ml)"
        />
        <ProductList
          rating="3.9"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/beard-growth-oil.webp"
          name=" Beard Growth Oil - 35 ml"
          price="399"
          weight="(35ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/beard-growth-serum-for-beard-growth_1.webp"
          name="Beard Growth Serum (For Oily Skin) - 35ml"
          price="360"
          weight="(35ml)"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/beard-growth-oil-60ml.webp"
          name=" Beard Growth Oil - 60 ml "
          price="423"
          weight="(60ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/light-beard-oil---35-ml-set-of-2.webp"
          name="Light Beard Oil - Set of 2"
          price="350"
          weight="(70ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bgo_scrub_1_3.webp"
          name="Beard Growth Oil and Face Scrub"
          price="714"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/4x4-set-of-2.webp"
          name=" Beard & Mooch Oil 4x4 - Set of 2"
          price="466"
          weight="(35ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/13_4.webp"
          name=" Beard & Mooch Oil (Woody) - Set of 2"
          price="699"
          weight="(100ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/beard_softener_set_of_2_beard_cream.webp"
          name="Beard Softener Woody - 100g - Set of 2"
          price="720"
          weight="(100g)"
        />
      </div>
    </div>
  );
}
export default Product4;
