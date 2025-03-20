import React from "react";
import { Card } from "../ui/card";

const ColorCard = ({ color }: {color: string}) => {
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