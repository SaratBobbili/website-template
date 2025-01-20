import React from 'react';

interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({ text }): JSX.Element => {
    return (
        <h1 className="text-4xl sm:text-5xl py-2 text-center md:text-left">
            {text}
        </h1>
    );
};

export default Header;
  