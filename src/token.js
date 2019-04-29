const MQ_SIZES = [['phone', 500], ['tablet', 768], ['desktop', 1024]];

export const fonts = {
  publicSans: {
    family: '"Public Sans", sans-serif'
  }
};

export const mq = MQ_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

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
  resetList() {
    return `
      list-style: none;
      margin-bottom: 0;
      margin-top: 0;
      padding-left: 0;
    `;
  },

  text(size) {
    switch (size) {
      case 'small':
        return `
          font-family: ${fonts.publicSans.family};
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
        `;

      case 'medium':
        return `
          font-family: ${fonts.publicSans.family};
          font-size: 1.33rem;
          font-weight: 400;
          line-height: 1.25;
        `;

      case 'huge':
        return `
          font-family: ${fonts.publicSans.family};
          font-size: 2.75rem;
          font-weight: 700;
          line-height: 1.1;
        `;

      default:
        return `
        font-family: ${fonts.publicSans.family};
        font-size: 1.31rem;
        font-weight: 400;
        line-height: 1.57;
      `;
    }
  }
};
