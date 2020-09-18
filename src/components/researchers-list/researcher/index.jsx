import React from 'react';

import style, { portrait } from './style';
import Picture from '../../picture';

export default ({
  title,
  acf: { affiliation, background, email, phone, image, topics },
}) => (
  <div className="researcher" id={title.replace(' ', '-').toLowerCase()}>
    <style jsx>{style}</style>
    {portrait.styles}

    <div className="image-container">
      {image && (
        <Picture
          image={image.localFile}
          type="fixed"
          className={portrait.className}
        />
      )}
    </div>

    <div className="content-container">
      <h3 className="title">{title}</h3>
      {background && (
        <p>
          <strong>Background:</strong> {background}
        </p>
      )}

      {topics && (
        <p>
          <strong>Focus topics:</strong> {topics}
        </p>
      )}

      {affiliation && (
        <p>
          <strong>Affiliation:</strong> {affiliation}
        </p>
      )}

      {email && (
        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}

      {phone && (
        <p>
          <strong>Telephone:</strong> <a href={`tel:${phone}`}>{phone}</a>
        </p>
      )}
    </div>
  </div>
);
