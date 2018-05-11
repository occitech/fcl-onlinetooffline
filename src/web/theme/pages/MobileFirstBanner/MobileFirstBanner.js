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
        console.log("CLICK");
        setBannerState(true);
      }}
      className={bannerClassName}
    >
      this Web Site is mostly design to mobile devices. You can still use it on
      desktop however your experience would be better on mobile devices. clic on
      this banner to make it disappear.
    </div>
  );
};

export default withState("bannerState", "setBannerState", false)(
  MobileFirstBanner
);
