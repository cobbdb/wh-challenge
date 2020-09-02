import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoItem = ({
  label,
  icon,
  text,
  children,
}) => (
  <h6 className="text-nowrap">
    <strong>
      <FontAwesomeIcon icon={icon} fixedWidth className="mr-1" />
      {label}
      <span>: </span>
    </strong>
    {text || children}
  </h6>
);

export default InfoItem;
