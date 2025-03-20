"use client";

import { rgbToHex } from "@/utils/colorUtils";
import React, { useEffect, useRef } from "react";

const CanvasImage = ({image, setHexColor, onCanvasClick}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [image]);

  const updateColor = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), canvas.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), canvas.height);
    const ctx = canvas.getContext("2d");

    const imageData = ctx.getImageData(x, y, 1, 1).data;
    const rgb = { r: imageData[0], g: imageData[1], b: imageData[2] };
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

    setHexColor(hex);
  };
  return (
    <canvas
      ref={canvasRef}
      onMouseMove={updateColor}
      onClick={onCanvasClick}
      width={900}
      height={500}
      style={{ border: "1px solid black", borderRadius: "0.5rem" }}
    />
  );
};

export default CanvasImage;
