import { fontSize, margin, position, svgSizes } from '@constants';

export interface ITheme {
  fontSize: typeof fontSize;
  width: number;
  height: number;
  borderRadius: number;
  boxShadow: string;
  svgSizes: typeof svgSizes;
  margin: typeof margin;
  position: typeof position;
  letterSpacing: number;
}
