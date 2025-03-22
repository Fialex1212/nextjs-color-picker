"use client";

import { rgbToHex } from "@/utils/colorUtils";
import React, { useEffect, useRef, useState } from "react";
import { CanvasImageProps } from "./types";

const CanvasImage: React.FC<CanvasImageProps> = ({
  image,
  setHexColor,
  onCanvasClick,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !image || !canvasRef.current) return;
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
  }, [image, isClient]);

  const updateColor = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Adjust for device pixel ratio
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    // Correct cursor position
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

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