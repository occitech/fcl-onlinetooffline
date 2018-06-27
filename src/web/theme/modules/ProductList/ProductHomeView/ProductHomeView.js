import React from "react";
import PropTypes from "prop-types";
import Button from "theme/ui/atoms/Button";
import IconWithLabel from "theme/ui/molecules/IconWithLabel";
import Link from "theme/ui/atoms/Typography/Link";
import createMediaUrlFromPath from "../../../../utils/createMediaUrlFromPath";
import Transition from "theme/ui/molecules/Transition";
import "./ProductHomeView.scss";

const ProductHomeView = ({
  accentTitle,
  title,
  contentProductIntro,
  product,
  active,
  nextProduct
}) => {
  const productHomeViewClasses = `product-home-view ${
    active ? "product-home-view--active" : ""
  }`;
  return (
    <div className={productHomeViewClasses}>
      <div className="product-home-view__background">
        <img alt={title} src={createMediaUrlFromPath(product.imageUrl)} />
      </div>
      <Transition type="fadeInTop">
        <div className="product-home-view__title">
          <strong>{accentTitle}</strong>
          {title}
        </div>
      </Transition>
      <Transition type="fadeInTop-half-delayed">
        <div className="product-home-view__content">
          {contentProductIntro} <strong>{product.name}</strong>
        </div>
      </Transition>
      <div className="product-home-view__action">
        <Transition type="fadeInTop-delayed" delayed>
          <div className="product-home-view__action__view-product">
            <Link to={`product/${product.sku}`} type="dark">
              View Product
            </Link>
          </div>
        </Transition>
        <Transition type="fadeInTop-double-delayed" delayed>
          <div className="product-home-view__action__next-product">
            <Button onClick={nextProduct} type="simple">
              <IconWithLabel animated icon="arrow-down" type="down">
                Next Product
              </IconWithLabel>
            </Button>
          </div>
        </Transition>
      </div>
    </div>
  );
};

Button.propTypes = {
  product: PropTypes.node,
  active: PropTypes.bool,
  nextProduct: PropTypes.func,
  viewProduct: PropTypes.func
};

export default ProductHomeView;
