export enum ColorCard {
  BLUE = "Blue",
  RED = "Red",
  GRAY = "Gray",
  BLACK = "Black",
}

export interface CardProps {
  src: string;
  color: ColorCard | undefined;
}
