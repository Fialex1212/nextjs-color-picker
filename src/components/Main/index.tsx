"use client";

import React, { useState } from "react";
import ImageInput from "../ImageInput";
import ColorCard from "../ColorCard";
import CanvasImage from "../CanvasImage";
import Result from "../Result";
import { Button } from "../ui/button";
import { useDropzone } from "react-dropzone";

const Main = () => {
  const [image, setImage] = useState<string | null>(null);
  const [hexColor, setHexColor] = useState("#000000");
  const [savedColor, setSavedColor] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const onPaste = (e: React.ClipboardEvent) => {
    const clipboardItems = e.clipboardData.items;
    for (let i = 0; i < clipboardItems.length; i++) {
      const item = clipboardItems[i];
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const saveColor = () => {
    if (savedColor) {
      setSavedColor(null);
    } else {
      setSavedColor(hexColor);
    }
  };

  return (
    <div className="min-h-[calc(100vh-196px)] w-full flex justify-center items-center mb-5 px-4">
      {!image ? (
        <ImageInput
          onPaste={onPaste}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          open={open}
        />
      ) : (
        <div>
          <div className="flex flex-col lg:flex-row gap-10 mb-5 items-center lg:items-start">
            <div className="flex flex-col w-full lg:w-[250px]">
              <ColorCard color={savedColor || hexColor} />
              <Result color={savedColor || hexColor} />
            </div>

            <CanvasImage
              image={image}
              setHexColor={setHexColor}
              onCanvasClick={saveColor}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center mb-1">
            <Button
              variant="destructive"
              className="cursor-pointer"
              onClick={() => setImage(null)}
            >
              Reset Image
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
