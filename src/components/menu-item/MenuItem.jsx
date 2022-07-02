import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  category,
  description,
}) => {
  let navigate = useNavigate();
  return (
    <div className={`${size} menu-item`}>
      <div onClick={() => navigate(`${linkUrl}`)} className="background-image">
        <img src={imageUrl} alt={category} />

        <div className="content">
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="content-title">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
