"use client";

import React from "react";
import { Label } from "../ui/label";
import { ImageInputProps } from "./types";

const ImageInput: React.FC<ImageInputProps> = ({
  onPaste,
  getRootProps,
  getInputProps,
  open,
}) => {
  const handleOpen = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    open();
  };

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 p-4 flex items-center justify-center cursor-pointer rounded-[0.5rem] h-full w-full min-h-[500px]"
      onPaste={onPaste}
      onClick={handleOpen}
      onTouchStart={handleOpen}
    >
      <input {...getInputProps()} />
      <Label>Upload Image, Drag & drop or click to select one</Label>
    </div>
  );
};

export default ImageInput;
