import { Canvas, Fill, useProgress } from "@shopify/react-native-skia";
import React from "react";

import { COLS, ROWS, Glyph } from "./Glyph";

export const Matrix = () => {
  const progress = useProgress();
  return (
    <Canvas style={{ flex: 1 }} mode="continuous" debug>
      <Fill color="black" />
      {new Array(COLS)
        .fill(0)
        .map((_i, i) =>
          new Array(ROWS)
            .fill(0)
            .map((_j, j) => (
              <Glyph progress={progress} key={`${i}-${j}`} i={i} j={j} />
            ))
        )}
    </Canvas>
  );
};
