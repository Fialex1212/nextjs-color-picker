import React from "react";
import { Card } from "../ui/card";
import { ColorCardProps } from "./types";

const ColorCard: React.FC<ColorCardProps> = ({ color }) => {
  return (
    <div className="font-sans">
      <Card
        className="min-w-[250px] w-[250px] h-[250px] p-0"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default ColorCard;
