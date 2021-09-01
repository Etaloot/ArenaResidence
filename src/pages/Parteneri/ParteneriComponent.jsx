import React from "react";
import "./Parteneri.scss";
import { Carousel } from "3d-react-carousal";

import BarrierLogo from "../../images/parteneri/barrier.svg";
import Schneider from "../../images/parteneri/Scheider.svg";
import Porotherm from "../../images/parteneri/Porotherm2.png";
import Rehau from "../../images/parteneri/Rehau.svg";
import "./Parteneri.scss";
const ParteneriComponent = () => {
  let slides = [
    <img src={Rehau} alt="0" />,
    <img src={BarrierLogo} alt="1" />,
    <img src={Schneider} alt="2" />,
    <img src={Porotherm} alt="3" />,
  ];

  return (
    <div id="services" className="services-section backy">
      <div className="content-wrapper">
        <Carousel slides={slides} autoplay={true} interval={1400} />
      </div>
    </div>
  );
};

export default ParteneriComponent;
