import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image } from "react-konva";
import { Html } from "react-konva-utils";
import Modalul from "./Modal";
import "./imageMap.scss";
import useImage from "use-image";
import MapImage from "../../images/decor/1 new.png";
import ApImage from "../../images/decor/apartament.png";
import imageMapResize from "image-map-resizer";
import { Parter, Et1, Et2, Et3, Et4, Et5, Et6, Et7, Et8 } from "./Etaje";
import { Ap1 } from "./Apartamente";
import { useHistory } from "react-router-dom";
const NewImageMapPage = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });
  function debounce(fn, ms) {
    let timer;

    return (_) => {
      clearTimeout(timer);

      timer = setTimeout((_) => {
        timer = null;

        fn.apply(this, arguments);
      }, ms);
    };
  }
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,

        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const BuildingImage = () => {
    const [image] = useImage(MapImage, "Anonymous");

    return <Image image={image} />;
  };
  const ApartamentImage = () => {
    const [image] = useImage(ApImage, "Anonymous");

    return <Image image={image} />;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const CANVAS_VIRTUAL_WIDTH = 950;
  const CANVAS_VIRTUAL_HEIGHT = 950;
  const scale = Math.min(
    dimensions.width / CANVAS_VIRTUAL_WIDTH,
    dimensions.height / CANVAS_VIRTUAL_HEIGHT
  );

  useEffect(() => {
    imageMapResize();
  }, []);

  useEffect(() => {
    if (isOpen2) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen2]);
  useEffect(() => {
    if (isOpen3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen3]);
  useEffect(() => {
    if (isOpen4) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen4]);
  useEffect(() => {
    if (isOpen5) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen5]);
  useEffect(() => {
    if (isOpen6) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen6]);
  useEffect(() => {
    if (isOpen7) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen7]);
  useEffect(() => {
    if (isOpen8) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen8]);
  useEffect(() => {
    if (isOpen9) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen9]);

  let history = useHistory();

  const stageRef = useRef();

  function handleClick() {
    history.push("/apartamente/1");
    history.go(0);
  }
  const onDblTap = () => {
    setIsOpen(true);
  };
  const onDblTap2 = () => {
    setIsOpen2(true);
  };
  const onDblTap3 = () => {
    setIsOpen3(true);
  };
  const onDblTap4 = () => {
    setIsOpen4(true);
  };
  const onDblTap5 = () => {
    setIsOpen5(true);
  };
  const onDblTap6 = () => {
    setIsOpen6(true);
  };
  const onDblTap7 = () => {
    setIsOpen7(true);
  };
  const onDblTap8 = () => {
    setIsOpen8(true);
  };
  const onDblTap9 = () => {
    setIsOpen9(true);
  };

  return (
    <Stage
      ref={stageRef}
      id="container"
      width={window.innerWidth}
      height={dimensions.height}
      scaleX={scale}
      scaleY={scale}
    >
      <Layer>
        <BuildingImage id="build" />
        <Parter
          onDblTap={onDblTap}
          onClick={() => {
            setIsOpen(true);
          }}
        />

        <Et1 onDblTap2={onDblTap2} onClick={() => setIsOpen2(true)} />
        <Et2 onDblTap3={onDblTap3} onClick={() => setIsOpen3(true)} />
        <Et3 onDblTap4={onDblTap4} onClick={() => setIsOpen4(true)} />
        <Et4 onDblTap5={onDblTap5} onClick={() => setIsOpen5(true)} />
        <Et5 onDblTap6={onDblTap6} onClick={() => setIsOpen6(true)} />
        <Et6 onDblTap7={onDblTap7} onClick={() => setIsOpen7(true)} />
        <Et7 onDblTap8={onDblTap8} onClick={() => setIsOpen8(true)} />
        <Et8 onDblTap9={onDblTap9} onClick={() => setIsOpen9(true)} />
      </Layer>

      <Layer>
        <Html>
          <Modalul open={isOpen} onClose={() => setIsOpen(false)}>
            <h1>Plan Parter</h1>
            <div className="modstg">
              <Stage
                id="container2"
                width={750}
                height={950}
                x={"50%"}
                scaleX={scale}
                scaleY={scale}
              >
                <Layer>
                  <ApartamentImage />
                  <Ap1 onClick={handleClick} />
                </Layer>
              </Stage>
            </div>
          </Modalul>
          <Modalul open={isOpen2} onClose={() => setIsOpen2(false)}>
            <h1>Plan Etaj 1</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen3} onClose={() => setIsOpen3(false)}>
            <h1>Plan Etaj 2</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen4} onClose={() => setIsOpen4(false)}>
            <h1>Plan Etaj 3</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen5} onClose={() => setIsOpen5(false)}>
            <h1>Plan Etaj 4</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen6} onClose={() => setIsOpen6(false)}>
            <h1>Plan Etaj 5</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen7} onClose={() => setIsOpen7(false)}>
            <h1>Plan Etaj 6</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen8} onClose={() => setIsOpen8(false)}>
            <h1>Plan Etaj 7</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen9} onClose={() => setIsOpen9(false)}>
            <h1>Plan Etaj 8</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
        </Html>
      </Layer>
    </Stage>
  );
};

export default NewImageMapPage;
