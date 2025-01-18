import React from 'react';
import HeaderProps from '../../types';

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <h1 className="text-4xl sm:text-5xl py-2 text-center md:text-left">
      {props.text}
    </h1>
  );
};

export default Header;
  