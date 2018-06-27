import React from "react";
import Observer from "@researchgate/react-intersection-observer";
import { compose, withState, withHandlers } from "recompose";
import "./Transition.scss";

const Transition = ({ children, handleChange, isVisible, type, delayed }) => {
  const transitionClass = `transition ${
    isVisible && type ? "transition--" + type : ""
  } ${delayed ? "transition--delayed" : ""}`;

  return (
    <Observer onChange={handleChange}>
      <div className={transitionClass}>{children}</div>
    </Observer>
  );
};

export default compose(
  withState("isVisible", "setVisibility", false),
  withHandlers({
    handleChange: props => event => {
      props.setVisibility(event.isIntersecting ? true : false);
    }
  })
)(Transition);
