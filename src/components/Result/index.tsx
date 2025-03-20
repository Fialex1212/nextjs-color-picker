"use client";

import React from "react";
import { hexToRgb, hexToCmyk, hexToHsv, hexToHsl } from "@/utils/colorUtils";
import CopyInput from "../CopyInput";

const Result = ({ color }: { color: string }) => {
  // Convert the hex color to different formats
  const rgb = hexToRgb(color);
  const cmyk = hexToCmyk(color);
  const hsv = hexToHsv(color);
  const hsl = hexToHsl(color);

  return (
    <div>
      <CopyInput text={color} type="HEX" />
      <CopyInput text={`${rgb.r}, ${rgb.g}, ${rgb.b}`} type={"RGB"} />
      <CopyInput
        text={` ${cmyk.c.toFixed(2)}%, ${cmyk.m.toFixed(2)}%, ${cmyk.y.toFixed(
          2
        )}%, ${cmyk.k.toFixed(2)}%`}
        type="CMYK"
      />
      <CopyInput
        text={`${hsv.h.toFixed(2)}°, ${hsv.s.toFixed(2)}%, ${hsv.v.toFixed(
          2
        )}%`}
        type="HSV"
      />
      <CopyInput
        text={`${hsl.h.toFixed(2)}°, ${hsl.s.toFixed(2)}%, ${hsl.l.toFixed(
          2
        )}%`}
        type="HSL"
      />
    </div>
  );
};

export default Result;
