import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Hamburger from './Hamburger';
import LanguageToggle from './LanguageToggle';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const { t } = useTranslation();

  // Create a mapping of route paths to translation keys
  const getTranslatedLabel = (path, originalLabel) => {
    const translationMap = {
      '/about': t('nav.about'),
      '/resume': t('nav.resume'),
      '/projects': t('nav.projects'),
      '/stats': t('nav.stats'),
      '/contact': t('nav.contact'),
    };

    return translationMap[path] || originalLabel;
  };

  return (
    <header id="header">
      <h1 className="index-link">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} to={l.path}>
              {l.label}
            </Link>
          ))}
      </h1>
      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link to={l.path}>{getTranslatedLabel(l.path, l.label)}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="header-right">
        <LanguageToggle />
        <Hamburger />
      </div>
    </header>
  );
};

export default Navigation;
