import React from 'react';

import style, { portrait } from './style';
import Picture from '../../picture';

export default ({
  title,
  acf: { background, email, phone, image, topics }
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
      <dl>
        {email && (
          <>
            <dt>Email:</dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </>
        )}

        {phone && (
          <>
            <dt>Telephone:</dt>
            <dd>
              <a href={`tel:${phone}`}>{phone}</a>
            </dd>
          </>
        )}

        {background && (
          <>
            <dt>Background:</dt>
            <dd>
              <p>{background}</p>
            </dd>
          </>
        )}

        {topics && (
          <>
            <dt>Focus topics:</dt>
            <dd>
              <p>{topics}</p>
            </dd>
          </>
        )}
      </dl>
    </div>
  </div>
);
