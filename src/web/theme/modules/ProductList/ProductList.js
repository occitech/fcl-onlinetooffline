import React from "react";
import ProductHomeView from "./ProductHomeView";
import compose from "recompose/compose";
import { withState, withHandlers } from "recompose";

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
      {reassurances.map((reassurance, index) => {
        return (
          <ProductHomeView
            key={products[index].name + index}
            accentTitle={reassurance.accentTitle}
            Title={reassurance.Title}
            contentProductIntro={reassurance.contentProductIntro}
            product={products[index]}
            isCurrent={(index === currentProductIndex) & true}
            nextProduct={setCurrentProductIndex}
          />
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
  })
)(ProductList);
