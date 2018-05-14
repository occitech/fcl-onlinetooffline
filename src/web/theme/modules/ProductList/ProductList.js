import React, { Fragment } from "react";
import ProductHomeView from "./ProductHomeView";
import { compose, withState, withHandlers, withProps } from "recompose";

const reassurances = [
  {
    accentTitle: "Feel",
    Title: "the music",
    contentProductIntro: "Discover our new"
  },
  {
    accentTitle: "Rock",
    Title: "your body",
    contentProductIntro: "Fall in love with our classic "
  }
];

const ProductList = ({
  products,
  currentProductIndex,
  setCurrentProductIndex
}) => {
  return (
    <div className="product-list">
      {products.map((product, index) => {
        return (
          <Fragment key={product.sku}>
            <ProductHomeView
              accentTitle={product.accentTitle}
              Title={product.Title}
              contentProductIntro={product.contentProductIntro}
              product={product}
              active={index === currentProductIndex}
              nextProduct={setCurrentProductIndex}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default compose(
  withState("currentProductIndex", "setCurrentProductIndex", 0),
  withHandlers({
    setCurrentProductIndex: props => () => {
      if (props.currentProductIndex < reassurances.length - 1) {
        props.setCurrentProductIndex(props.currentProductIndex + 1);
      } else {
        props.setCurrentProductIndex(0);
      }
    }
  }),
  withProps(props => ({
    products: props.products
      .slice(0, 2)
      .map((product, index) => Object.assign({}, product, reassurances[index]))
  }))
)(ProductList);
