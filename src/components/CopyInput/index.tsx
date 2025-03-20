import React from "react";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const CopyInput = ({ text, type }: { text: string; type: string }) => {
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`You copied ${type}`);
  };

  return (
    <div className="py-[8px]">
      <Label>{type}</Label>
      <div className="relative text-center">
        <Label className="text-[13px]">{text}</Label>
        <Button
          className="absolute right-0 bottom-1/2 transform translate-y-1/2 w-[30px] h-[30px]"
          onClick={() => handleCopy(text, type)}
        >
          <Copy size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CopyInput;
