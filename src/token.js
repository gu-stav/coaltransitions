/* eslint-disable no-case-declarations */
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
  // Blue
  blueAction: '#2E56B4',
  blueActionActive: '#00125E',
  blueBrand: '#0D47A1',

  // Grey
  greyLight: '#E2E2E2',
  greyDark: '#9C9C9C',

  // Green
  greenBrand: '#7DB343',
  greenAction: '#629A27'
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

  text(size, screenSize = 'phone') {
    const sizes = {
      mini: {
        phone: `
          font-family: ${fonts.publicSans.family};
          font-size: 0.7rem;
          font-weight: 400;
          line-height: 1.18;
        `,

        tablet: `
          font-family: ${fonts.publicSans.family};
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1.18;
        `,

        desktop: `
        font-family: ${fonts.publicSans.family};
        font-size: 0.85rem;
        font-weight: 400;
        letter-spacing: 0.05rem;
        line-height: 1.3;
      `
      },

      small: {
        phone: `
          font-family: ${fonts.publicSans.family};
          font-size: 0.8rem;
          font-weight: 400;
          line-height: 1.18;
        `,

        tablet: `
          font-family: ${fonts.publicSans.family};
          font-size: 0.85rem;
          font-weight: 400;
          line-height: 1.18;
        `,

        desktop: `
        font-family: ${fonts.publicSans.family};
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.18;
      `
      },

      'regular-big': {
        phone: `
        font-family: ${fonts.publicSans.family};
        font-size: 1.15rem;
        font-weight: 700;
        line-height: 1.2;
      `,

        tablet: `
        font-family: ${fonts.publicSans.family};
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.2;
      `,

        desktop: `
      font-family: ${fonts.publicSans.family};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
    `
      },

      medium: {
        phone: `
        font-family: ${fonts.publicSans.family};
        font-size: 1.15rem;
        font-weight: 800;
        line-height: 1.2;
      `,

        tablet: `
        font-family: ${fonts.publicSans.family};
        font-size: 1.25rem;
        font-weight: 800;
        line-height: 1.2;
      `,

        desktop: `
        font-family: ${fonts.publicSans.family};
        font-size: 1.75rem;
        font-weight: 800;
        line-height: 1.2;
      `
      },

      big: {
        desktop: `
        font-family: ${fonts.publicSans.family};
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.11;
      `
      },

      'extra-big': {
        phone: `
        font-family: ${fonts.publicSans.family};
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.03;
      `,
        tablet: `
        font-family: ${fonts.publicSans.family};
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.03;
      `,
        desktop: `
        font-family: ${fonts.publicSans.family};
        font-size: 3.18rem;
        font-weight: 700;
        line-height: 1.03;
      `
      },

      huge: {
        phone: `
        font-family: ${fonts.publicSans.family};
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.26;
      `,
        tablet: `
        font-family: ${fonts.publicSans.family};
        font-size: 3rem;
        font-weight: 600;
        line-height: 1.26;
      `,
        desktop: `
        font-family: ${fonts.publicSans.family};
        font-size: 4rem;
        font-weight: 600;
        line-height: 1.1;
      `
      }
    };

    return (
      (sizes[size] && sizes[size][screenSize]) ||
      `
    font-family: ${fonts.publicSans.family};
    font-size: 1.31rem;
    font-weight: 400;
    line-height: 1.71;
  `
    );
  }
};
