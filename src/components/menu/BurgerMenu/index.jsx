import Link from 'gatsby-link';
import Modal from 'react-modal';
import React, { useState } from 'react';

import style, { modalStyle, itemFirstLevel, socialMediaIcon } from './style';

import LinkedInIcon from '../../../../static/icons/linkedin.svg';
import TwitterIcon from '../../../../static/icons/twitter.svg';

const Item = ({ to, children, ...attributes }) => (
  <Link
    to={to}
    className={itemFirstLevel.className}
    partiallyActive
    {...attributes}
  >
    {children}
  </Link>
);

const BurgerMenu = ({ items, socialMediaChannels }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style jsx>{style}</style>
      {itemFirstLevel.styles}
      {socialMediaIcon.styles}

      <button
        type="button"
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="burger-svg"
        >
          <path
            fill="currentColor"
            d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
          />
        </svg>

        <span className="burger-label">Menu</span>
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyle}
      >
        <div className="modal-header">
          <button
            type="button"
            className="burger burger--is-close"
            onClick={() => setIsOpen(false)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="burger-svg"
            >
              <path
                fill="currentColor"
                d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
              />
            </svg>
            <span className="burger-label">Close</span>
          </button>
        </div>

        <ul className="modal-menu">
          {items.map(({ url, label }) => (
            <li key={`menu-modal-${label}`}>
              <Item to={url}>{label}</Item>
            </li>
          ))}
        </ul>

        {(socialMediaChannels?.twitter || socialMediaChannels?.linkedIn) && (
          <div className="social-media-container">
            <p className="social-media-container__label">Follow us</p>

            <div className="social-media-container__inner">
              {socialMediaChannels?.twitter && (
                <a
                  href={socialMediaChannels.twitter}
                  aria-label="Follow us on Twitter"
                  className="social-media__item"
                >
                  <TwitterIcon className={socialMediaIcon.className} />
                </a>
              )}

              {socialMediaChannels?.linkedIn && (
                <a
                  href={socialMediaChannels.linkedIn}
                  aria-label="Follow us on LinkedIn"
                  className="social-media__item"
                >
                  <LinkedInIcon className={socialMediaIcon.className} />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default BurgerMenu;
