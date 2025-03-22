import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

export interface ImageInputProps {
  onPaste: (e: React.ClipboardEvent<HTMLDivElement>) => void;
  getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
  getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
  open: () => void;
}