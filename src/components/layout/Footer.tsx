import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../constants';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="w-full py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span>{COMPANY_INFO.COPYRIGHT_TEXT}</span>
          <span>•</span>
          <span>Code released under <a className="underline" href={SOCIAL_LINKS.GITHUB_REPO} target="_blank" rel="noopener noreferrer">{COMPANY_INFO.LICENSE_TEXT}</a></span>
        </div>
        <div className="flex items-center gap-2">
          <span>{COMPANY_INFO.DESIGN_CREDIT}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;