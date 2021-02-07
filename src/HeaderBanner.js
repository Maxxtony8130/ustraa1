import React from "react";
import "./HeaderBanner.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useHistory } from "react-router-dom";
function HeaderBanner() {
  const history = useHistory();
  const cologne = () => {
    history.push("/cologne");
  };
  const face = () => {
    history.push("/face");
  };
  const beard = () => {
    history.push("/beard");
  };
  const hair = () => {
    history.push("/hair");
  };
  const skin = () => {
    history.push("/skin");
  };
  const accessories = () => {
    history.push("/accessories");
  };
  const home = () => {
    history.push("/");
  };
  return (
    <div className="headerbanner">
      <div onClick={home} className="headerbanner_list">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/icon_2_1_.png " />
        <p>Sale</p>
      </div>
      <div onClick={cologne} className="headerbanner_list">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Untitled-1.png" />
        <p>Perfume for men</p>
      </div>
      <div onClick={beard} className="headerbanner_list">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Growth-Oil.png " />
        <p>Beard</p>
      </div>
      <div onClick={hair} className="headerbanner_list">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/vitaliser.png " />
        <p>Hair Growth</p>
      </div>
      <div onClick={accessories} className="headerbanner_list">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/gift_3.png " />
        <p>Gift Packs</p>
      </div>
      <div className="headerbanner_list">
        <img
          onClick={face}
          src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Bath_Body.png "
        />
        <p>Soaps</p>
      </div>
      <div onClick={hair} className="headerbanner_list">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/AntiDandruff.png " />
        <p>Shampoo</p>
      </div>
      <div onClick={skin} className="headerbanner_list">
        <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Face-Scrub---De-Tan-_New-Packging_.png" />
        <p>De-Tans</p>
      </div>
      <div className="headerbanner_list">
        <AddCircleIcon
          style={{ marginRight: "10px", color: "grey", marginLeft: "10px" }}
        />
        <p>More Categories</p>
      </div>
    </div>
  );
}

export default HeaderBanner;
