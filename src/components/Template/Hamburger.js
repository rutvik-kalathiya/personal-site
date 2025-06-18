import React, { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../data/routes';
import LanguageToggle from './LanguageToggle';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index && 'index-li'}>
                    {l.index ? l.label : getTranslatedLabel(l.path, l.label)}
                  </h3>
                </Link>
              </li>
            ))}
            <li className="language-toggle-mobile">
              <div className="language-toggle-container">
                <LanguageToggle />
              </div>
            </li>
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
