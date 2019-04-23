export const fonts = {
  publicSans: {
    family: '"Public Sans", sans-serif'
  }
};

export const colors = {
  // Yellow
  yellowLight: '#FFFB4E',
  yellowMedium: '#F5E01F',
  yellowDark: '#D5C200',

  // Blue
  blueMedium: '#0D47A1',
  blueDarkLight: '#002171',
  blueDark: '#00125E',

  // Grey
  greyLight: '#E2E2E2',
  greyMedium: '#C5C5C5',
  greyDarkLight: '#9C9C9C',
  greyDark: '#575756'
};

export const mixins = {
  textBig: `
    font-family: ${fonts.publicSans.family};
    font-size: 1.5rem;
    font-weight: 800;
  `,

  textRegular: `
    font-family: ${fonts.publicSans.family};
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.5;
  `
};