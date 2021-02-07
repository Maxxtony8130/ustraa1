import React from "react";
import "./Product.css";
import ProductList from "./ProductList";
function Product() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Sales</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Awesome Products. Lot Of Savings.
        </p>
      </div>
      <div className="product__row">
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/malt1_4_1.webp"
          name="Malt - Perfume for Men - 100ml"
          price="1499"
          weight="(100ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/insignia1_5.webp"
          name="Insignia - Perfume For Men - 100ml"
          price="1499"
          weight="(100ml)"
        />
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/price-matching-creatives1.webp"
          name="Hair Growth Kit"
          price="1228"
          weight="(100ml)"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="3.7"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/beard-growth-oil-60ml.webp"
          name="Beard Growth Oil - 60 ml "
          price="423"
          weight="(60ml)"
        />
        <ProductList
          rating="3.5"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/super_de_tan_dry_kit.webp"
          name="Super De-Tan Dry Skin"
          price="629"
        />
        <ProductList
          rating="4.2"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/super_detan_oil_pack_3.3.webp"
          name="Super De- Tan Oily Skin"
          price="629"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="3.9"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/1_117.webp"
          name="Scuba Cologne - 100 ml - Perfume for Men"
          price="600"
          weight="(100ml)"
        />
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bundles.webp"
          name="Winter Care Pack - Beard"
          price="720"
        />
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/bundle1_2_.webp"
          name="Beard Growth Booster Pack"
          price="992"
        />
      </div>
    </div>
  );
}
export default Product;
