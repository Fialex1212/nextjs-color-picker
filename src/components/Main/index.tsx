"use client";

import React, { useState } from "react";
import ImageInput from "../ImageInput";
import ColorCard from "../ColorCard";
import CanvasImage from "../CanvasImage";
import Result from "../Result";

const Main = () => {
  const [image, setImage] = useState<string | null>(null);
  const [hexColor, setHexColor] = useState("#000000");
  const [savedColor, setSavedColor] = useState<string | null>(null);

  const onDrop = (accepdedFile: File[]) => {
    const file = accepdedFile[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
    <div className="h-[calc(100vh-196px)] w-full flex justify-center items-center mb-[20px]">
      {!image ? (
        <ImageInput onDrop={onDrop} onPaste={onPaste} />
      ) : (
        <div className="flex gap-[40px]">
          <div className="flex flex-col w-[250px]">
            <ColorCard color={savedColor || hexColor} />
            <Result color={savedColor || hexColor}/>
          </div>

          <CanvasImage
            image={image}
            setHexColor={setHexColor}
            onCanvasClick={saveColor}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
