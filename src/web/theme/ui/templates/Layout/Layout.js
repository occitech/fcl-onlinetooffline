import React from "react";
import "./Layout.scss";
import MobileFirstBanner from "theme/pages/MobileFirstBanner";
const Layout = ({ children, header, footer }) => {
  return (
    <div className="container">
      <MobileFirstBanner />
      {header}
      {children}
      {footer}
    </div>
  );
};

export default Layout;
