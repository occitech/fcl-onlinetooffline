import React from "react";
import PropTypes from "prop-types";
import Icon from "theme/ui/atoms/Icon";
import "./IconWithLabel.scss";

const IconWithLabel = ({ icon, children, type = "up" }) => {
  if (type === "up") {
    return (
      <span className="icon-with-label">
        <Icon icon={icon} />
        <span>{children}</span>
      </span>
    );
  } else if (type === "down") {
    return (
      <span className="icon-with-label">
        <span>{children}</span>
        <Icon icon={icon} />
      </span>
    );
  }
};

IconWithLabel.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["up", "down"])
};

export default IconWithLabel;
