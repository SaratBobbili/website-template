import React from 'react';
import { COMPANY_INFO } from '../../constants';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="w-full py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span>{COMPANY_INFO.COPYRIGHT_TEXT}</span>
          <span>•</span>
          <span>{COMPANY_INFO.LICENSE_TEXT}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{COMPANY_INFO.DESIGN_CREDIT}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
