import React from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import Actions from "./Actions";
import TitleWithPrice from "theme/ui/molecules/TitleWithPrice";
import Transition from "theme/ui/molecules/Transition";
import "./ProductSynthesis.scss";

const ProductSynthesis = ({ product }) => (
  <div className="product-view">
    <Transition type="fade-in-top" delay={0.5} duration={0.5}>
      <div className="product-view__title">
        <TitleWithPrice price={product.prices.finalPrice.priceInclTax}>
          {product.name}
        </TitleWithPrice>
      </div>
    </Transition>
    <Transition type="fade-in-top" delay={0.7} duration={0.5}>
      <Actions product={product} />
    </Transition>
    <Transition type="fade-in-top" delay={1} duration={0.5}>
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
