import { css } from 'styled-components';
import { colors } from '@assets';

export const fontSize = {
  small: 1.6,
  medium: 2.2,
  big: 3.4,
};

export const width = 45;
export const height = 10;
export const borderRadius = 2.4;
export const boxShadow = `0.4rem 0.4rem 0.8rem ${colors.lightGray}`;

export const svgSizes = {
  small: {
    height: 1.5,
    width: 1.5,
  },
  medium: {
    height: 3,
    width: 3,
  },
};

export const margin = {
  marginLeft: {
    small: 2,
  },
  marginBottom: {
    small: 1,
    medium: 3,
  },
};

export const position = {
  top: 2,
  left: 0,
  right: 2,
  bottom: 0,
};

export const letterSpacing = 0.2;

export const center = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
`;
