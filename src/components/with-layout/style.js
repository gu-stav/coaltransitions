import css from 'styled-jsx/css';

export default css`
  :global(*),
  :global(*::after),
  :global(*::before) {
    box-sizing: border-box;
  }

  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-display: swap;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/public-sans/webfonts/PublicSans-Regular.woff2')
        format('woff2'),
      url('/fonts/public-sans/webfonts/PublicSans-Regular.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/public-sans/webfonts/PublicSans-SemiBold.woff2')
        format('woff2'),
      url('/fonts/public-sans/webfonts/PublicSans-SemiBold.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/public-sans/webfonts/PublicSans-ExtraBold.woff2')
        format('woff2'),
      url('/fonts/public-sans/webfonts/PublicSans-ExtraBold.woff')
        format('woff');
  }
`;
