import React from "react";
import "./brand.css";
import { google, shopify, slack, atlassian, dropbox } from "./importBrands";
const Brand = () => {
  return (
    <div className="gbt3__brand section__padding">
      <BrandImage src={google} alt="google" />
      <BrandImage src={slack} alt="slack" />
      <BrandImage src={atlassian} alt="atlassian" />
      <BrandImage src={dropbox} alt="dropbox" />
      <BrandImage src={shopify} alt="shopify" />
    </div>
  );
};

export default Brand;
//!  HELPER COMPONENTS
const BrandImage = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};
