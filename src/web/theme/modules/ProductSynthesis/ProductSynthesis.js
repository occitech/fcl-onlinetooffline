import React from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import Actions from "./Actions";
import TitleWithPrice from "theme/ui/molecules/TitleWithPrice";
import Transition from "theme/ui/molecules/Transition";
import "./ProductSynthesis.scss";

const ProductSynthesis = ({ product }) => (
  <div className="product-view">
    <div className="product-view__title">
      <Transition type="fadeInTop">
        <TitleWithPrice price={product.prices.finalPrice.priceInclTax}>
          {product.name}
        </TitleWithPrice>
      </Transition>
    </div>
    <Transition type="fadeInTop-half-delayed">
      <Actions product={product} />
    </Transition>
    <Transition type="fadeInTop-delayed">
      <Description>{product.description}</Description>
    </Transition>
  </div>
);

ProductSynthesis.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    description: PropTypes.string
  })
};
export default ProductSynthesis;
