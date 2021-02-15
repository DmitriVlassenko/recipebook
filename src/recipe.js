import React from "react";
import style from "./recipe.module.css";

let i = 0;

const Recipe = ({title, image, link}) => {
    return(
      <div className={style.recipe}>
          <a href={link} target="_blank">
          <h1>{title}</h1>
          </a>
          <a href={link} target="_blank">
          <img className={style.image} src={image} alt=""/>
          </a>
          <a href={link} target="_blank">
              <h3>Read more</h3>
          </a>
      </div>
    );
}

export default Recipe;