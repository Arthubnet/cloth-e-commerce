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
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="background-image"
      />
      <div className="content">
        {/*  <h1 className="title">{title.toUpperCase()}</h1> */}
        <span className="subtitle">Shop Now</span>
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
