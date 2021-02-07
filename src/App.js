import "./App.css";
import Header from "./Header";
import HeaderBanner from "./HeaderBanner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./Slider";
import Product from "./Product";
import ProductCategories from "./ProductCategories";
import Product1 from "./Product1";
import Product2 from "./product/Product2";
import Product3 from "./product/Product3";
import Product4 from "./product/Product4";
import Product5 from "./product/Product5";
import Product6 from "./product/Product6";
import Product7 from "./product/Product7";
import Product8 from "./product/Product8";
import Product9 from "./product/Product9";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/essential">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product1 />
          </Route>
          <Route path="/nav">
            <Nav />
          </Route>
          <Route path="/accessories">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product9 />
          </Route>
          <Route path="/shave">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product8 />
          </Route>
          <Route path="/skin">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product7 />
          </Route>
          <Route path="/hair">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product6 />
          </Route>
          <Route path="/beard">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product5 />
          </Route>
          <Route path="/face">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product4 />
          </Route>
          <Route path="/trimmer">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product3 />
          </Route>
          <Route path="/cologne">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product2 />
          </Route>
          <Route path="/">
            <Header />
            <HeaderBanner />
            <Slider />
            <ProductCategories />
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
