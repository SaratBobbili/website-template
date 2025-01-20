import React from 'react';
import { SECTION_HEADERS } from '../../constants';

interface HeaderProps {
    text: keyof typeof SECTION_HEADERS | string;
}

const Header: React.FC<HeaderProps> = ({ text }): JSX.Element => {
    return (
        <h1 className="text-4xl sm:text-5xl py-2 text-center md:text-left">
            {text}
        </h1>
    );
};

export default Header;
  