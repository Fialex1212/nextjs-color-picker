"use client";

import React from "react";
import { useDropzone } from "react-dropzone";
import { Label } from "../ui/label";

const ImageInput = ({ onDrop, onPaste }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" as const,
    noClick: true,
  });

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 p-4 flex items-center justify-center cursor-pointer rounded-[0.5rem] h-full w-full"
      onPaste={onPaste}
      onClick={() => document.querySelector('input[type="file"]')?.click()}
    >
      <input {...getInputProps()} />
      <Label>Upload Image, Drag & drop or click to select one</Label>
    </div>
  );
};

export default ImageInput;
