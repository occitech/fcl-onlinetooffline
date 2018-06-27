import React from "react";
import PropTypes from "prop-types";
import Button from "theme/ui/atoms/Button";
import IconWithLabel from "theme/ui/molecules/IconWithLabel";
import Link from "theme/ui/atoms/Typography/Link";
import createMediaUrlFromPath from "../../../../utils/createMediaUrlFromPath";
import "./ProductHomeView.scss";

const ProductHomeView = ({
  accentTitle,
  title,
  contentProductIntro,
  product,
  active,
  nextProduct
}) => {
  const productHomeViewClasses = `product-home-view${active ? "--active" : ""}`;
  return (
    <div className={productHomeViewClasses}>
      <div className="product-home-view__background">
        <img src={createMediaUrlFromPath(product.imageUrl)} />
      </div>
      <div className="product-home-view__title">
        <strong>{accentTitle}</strong>
        {Title}
      </div>
      <div className="product-home-view__content">
        {contentProductIntro} <strong>{product.name}</strong>
      </div>
      <div className="product-home-view__action">
        <div className="product-home-view__action__view-product">
          <Link to={`product/${product.sku}`} type="dark">
            View Product
          </Link>
        </div>
        <div className="product-home-view__action__next-product">
          <Button onClick={nextProduct} type="simple">
            <IconWithLabel icon="arrow-down" type="down">
              Next Product
            </IconWithLabel>
          </Button>
        </div>
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
