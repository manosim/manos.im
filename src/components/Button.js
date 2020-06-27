import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Button = ({ to }) => {
  return (
    <Link
      className="flex items-center hover:bg-primary hover:text-white border-solid border-2 border-primary rounded-md py-4 px-6 mt-4 text-gray-800 text-xs font-semibold uppercase"
      to={to}
    >
      Continue reading
      <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
    </Link>
  );
};
