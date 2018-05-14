import React from "react";
import { withState } from "recompose";
import "./MobileFirstBanner.scss";

const MobileFirstBanner = ({ bannerState, setBannerState }) => {
  const bannerClassName = `mobile-first-banner${
    bannerState ? "--clicked" : ""
  }`;
  return (
    <div
      onClick={() => {
        setBannerState(true);
      }}
      className={bannerClassName}
    >
      This Web Site is mostly design to mobile devices. You can still use it on
      desktop however your experience would be better on mobile devices. Clic on
      this banner to make it disappear.
    </div>
  );
};

export default withState("bannerState", "setBannerState", false)(
  MobileFirstBanner
);
