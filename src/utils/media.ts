const ext = 'px';

export const W_SIZE = {
  minLg: 1200,
  maxLg: 1199.9,

  minMd: 768,
  maxMd: 767.9,

  minSm: 576,
  maxSm: 575.9,
};

const minW = (w: number) => `@media screen and (min-width: ${w}${ext})`;
const maxW = (w: number) => `@media screen and (max-width: ${w}${ext})`;

export const MEDIA = {
  minLg: minW(W_SIZE.minLg),
  maxLg: maxW(W_SIZE.maxLg),

  minMd: minW(W_SIZE.minMd),
  maxMd: maxW(W_SIZE.maxMd),

  minSm: minW(W_SIZE.minSm),
  maxSm: maxW(W_SIZE.maxSm),
};
