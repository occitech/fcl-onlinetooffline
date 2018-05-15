import React from "react";
import "./Layout.scss";
import MobileFirstBanner from "theme/pages/MobileFirstBanner";
import { withRouter } from "react-router";

const Layout = ({ children, header, footer, location }) => {
  const layoutClasse = `container${location.pathname === "/" ? "-home" : ""}`;
  return (
    <div className={layoutClasse}>
      <MobileFirstBanner />
      {header}
      {children}
      {footer}
    </div>
  );
};

export default withRouter(Layout);
