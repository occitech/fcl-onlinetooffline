import React from "react";
import PropTypes from "prop-types";
import "./Description.scss";

const Description = ({ children }) => (
  <div className="product-view__description">
    <span className="product-view__description__title">
      Professional review
    </span>
    {children && (
      <div
        className="product-description"
        dangerouslySetInnerHTML={{
          __html: children
        }}
      />
    )}
  </div>
);

Description.propTypes = {
  children: PropTypes.node.isRequired
};

export default Description;
