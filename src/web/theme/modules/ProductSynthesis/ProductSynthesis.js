import React from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import Actions from "./Actions";
import TitleWithPrice from "theme/ui/molecules/TitleWithPrice";
import TransitionOnScroll from "theme/ui/molecules/TransitionOnScroll";
import "./ProductSynthesis.scss";

const ProductSynthesis = ({ product }) => (
  <div className="product-view">
    <TransitionOnScroll type="fade-in-top" delay={0.5} duration={0.5}>
      <div className="product-view__title">
        <TitleWithPrice price={product.prices.finalPrice.priceInclTax}>
          {product.name}
        </TitleWithPrice>
      </div>
    </TransitionOnScroll>
    <TransitionOnScroll type="fade-in-top" delay={0.7} duration={0.5}>
      <Actions product={product} />
    </TransitionOnScroll>
    <TransitionOnScroll type="fade-in-top" delay={1} duration={0.5}>
      <Description>{product.description}</Description>
    </TransitionOnScroll>
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
