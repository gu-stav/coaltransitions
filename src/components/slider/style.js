import css from 'styled-jsx/css';

import { colors, mixins } from '../../token';

export default css`
  :global(.rc-slider) {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
    user-select: none;
  }

  :global(.rc-slider-rail) {
    position: absolute;
    width: 100%;
    background-color: ${colors.greyLight};
    height: 5px;
    border-radius: 6px;
  }

  :global(.rc-slider-track) {
    position: absolute;
    left: 0;
    height: 5px;
    border-radius: 6px;
    background-color: ${colors.blueBrand};
  }

  :global(.rc-slider-step) {
    position: absolute;
    width: 100%;
    height: 5px;
    background: transparent;
  }

  :global(.rc-slider-handle) {
    position: absolute;
    margin-left: -7px;
    margin-top: -6px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    border-radius: 50%;
    border: solid 2px ${colors.blueBrand};
    background-color: white;
    outline: none;
    touch-action: pan-x;
  }

  :global(.rc-slider-handle:hover),
  :global(.rc-slider-handle:focus) {
    background-color: ${colors.blueBrand};
  }

  :global(.rc-slider-mark) {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }

  :global(.rc-slider-mark-text) {
    ${mixins.text('small')}

    position: absolute;
    display: inline-block;
    font-size: 0.7rem;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: black;
  }

  :global(.rc-slider-mark-text-active) {
    color: ${colors.blueBrand};
  }

  :global(.rc-slider-dot) {
    position: absolute;
    bottom: -2px;
    margin-left: -4px;
    width: 9px;
    height: 9px;
    border: 2px solid ${colors.greyLight};
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }

  :global(.rc-slider-dot-active) {
    background-color: ${colors.blueBrand};
    border-color: ${colors.blueBrand};
  }
`;
