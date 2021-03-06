import React, { useState } from "react";

import { Line, Tag, Text, Label, Group } from "react-konva";

export const Ap1 = ({ onClick }) => {
  const [opacity, setOpacity] = useState(0);

  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };

  return (
    <Group
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        className="line"
        points={[
          183, 589, 243, 589, 243, 611, 297, 613, 298, 537, 301, 385, 276, 383,
          274, 371, 234, 371, 236, 386, 186, 390, 162, 386, 164, 401, 179, 400,
          180, 432, 166, 434, 161, 571, 180, 570,
        ]}
        key={30}
        tension={0.5}
        closed={true}
        stroke={"rgba(255, 186, 0, .7)"}
        fill={"rgba(255, 186, 0, .7)"}
      />
      <Label id="tooltip" x={800} y={500}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
