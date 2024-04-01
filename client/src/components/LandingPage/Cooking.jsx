import React from "react";
import CookingImg from "./CookingImg";
import { cookingHeader, cookingImages, cookingText } from "../../assets/data";

const Cooking = () => {
  return (
    <div className="cooking">
      <h1>What's Cookin'</h1>
      <div className="cookingImg">
        <CookingImg
          cImg={cookingImages[0]}
          cHeader={cookingHeader[0]}
          cText={cookingText[0]}
        />
        <CookingImg
          cImg={cookingImages[1]}
          cHeader={cookingHeader[1]}
          cText={cookingText[1]}
        />
      </div>
      <button>more from the blog</button>
    </div>
  );
};

export default Cooking;
