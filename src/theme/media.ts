import { css } from 'styled-components';
import { device } from './device';

export const media = {
  xs: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${device.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${device.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${device.md}) {
      ${css(...args)};
    }
  `,
  lg: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${device.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${device.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${device.xxl}) {
      ${css(...args)};
    }
  `,
};
