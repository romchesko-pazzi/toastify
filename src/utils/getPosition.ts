import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Positions } from '@types';

export const getPosition = (position: Positions): FlattenSimpleInterpolation => {
  switch (position) {
    case Positions.TopLeft:
      return css`
        top: 1.5rem;
        left: 1.5rem;
      `;
    case Positions.TopRight:
      return css`
        top: 1.5rem;
        right: 1.5rem;
      `;
    case Positions.BottomLeft:
      return css`
        bottom: 1.5rem;
        left: 1.5rem;
      `;
    case Positions.BottomRight:
      return css`
        bottom: 1.5rem;
        right: 1.5rem;
      `;
    default:
      return css``;
  }
};
