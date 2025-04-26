export interface CanvasImageProps {
  image: string;
  setHexColor: (color: string) => void;
  onCanvasClick: () => void;
  className?: string;
}
