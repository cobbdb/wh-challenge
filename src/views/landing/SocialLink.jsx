import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ url, icon }) => (
  <a
    href={`//${url}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-clear btn-sm"
  >
    <FontAwesomeIcon icon={icon} size="3x" />
  </a>
);

export default SocialLink;
