import Link from 'gatsby-link';
import Modal from 'react-modal';
import React, { useState } from 'react';

import style, {
  modalStyle,
  itemFirstLevel,
  socialMediaIcon,
  barsIcon,
} from './style';

import BarsIcon from '../../../../static/icons/bars-thin.svg';
import LinkedInIcon from '../../../../static/icons/linkedin.svg';
import TimesIcon from '../../../../static/icons/times-thin.svg';
import TwitterIcon from '../../../../static/icons/twitter.svg';

Modal.setAppElement(`#___gatsby`);

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
      {barsIcon.styles}

      <button
        type="button"
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BarsIcon className={barsIcon.className} />
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
            <TimesIcon className={barsIcon.className} />
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
