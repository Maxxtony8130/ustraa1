import React from "react";
import "../Product.css";
import ProductList from "../ProductList";
function Product4() {
  return (
    <div className="product">
      <div className="product__title">
        <h5>Hair</h5>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Hair care products to make your hair soft and shiny!
        </p>
      </div>
      <div className="product__row">
        <ProductList
          rating="4"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/22_3.webp"
          name=" Hair Growth Cream "
          price="409"
          weight="(100 g)"
        />
        <ProductList
          rating="3.6"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/product_page_-_wet-1.webp"
          name=" Hair Wax - Strong Hold, Wet Look - 100g "
          price="399"
          weight="(100 g)"
        />
        <ProductList
          rating="3.5"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/product_page_-_matte-1.webp"
          name=" Hair Wax - Strong Hold, Matte Look - 100g"
          price="399"
          weight="(100 g)"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/8_16.webp"
          name=" Charcoal & Clay Shampoo- 200 ml"
          price="245"
          weight="(200 ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/hair-vitalizer-serum-for-hair-growth_1_1_1.webp"
          name=" Hair Growth Vitalizer - 100 ml"
          price="699"
          weight="(200 ml)"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/1_1100x1100.webp"
          name=" Ayurvedic Hair Oil - 200 ml
          "
          price="598"
          weight="(200  ml)"
        />
      </div>
      <div className="product__row">
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/hair-growth-cream-_-gear-5-black.webp"
          name=" Shave & Hair Growth Pack "
          price="783"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/hair-cream-_-gear-5-black_1.webp"
          name=" Shave & Nourish Pack"
          price="498"
        />
        <ProductList
          rating="4.3"
          imgUrl="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/webp2/1_6__1.webp"
          name=" Hair Growth Vitalizer,Neem & Facewash "
          price="853"
        />
      </div>
    </div>
  );
}
export default Product4;
