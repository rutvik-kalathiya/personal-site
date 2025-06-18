import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const { t } = useTranslation();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>Rutvik Kalathiya</h2>
          <p>
            <a href="mailto:rutvikkalathiya7@gmail.com">rutvikkalathiya7@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>{t('sidebar.about')}</h2>

        {/* <p>
          Hi, I&apos;m Rutvik. I am a graduate of TU Chemnitz and
          a full-stack developer with 3+ years of experience.
          Currently, I&apos;m working at PurpleLeafStrategy, where I build Enavia —
          a cloud-based SaaS platform transforming pharmaceutical brand planning.
        </p> */}
        <p>
          <span dangerouslySetInnerHTML={{ __html: t('sidebar.greeting') }} />
        </p>
        <p>
          <span dangerouslySetInnerHTML={{ __html: t('sidebar.currently') }} />
        </p>
        <p>
          <span dangerouslySetInnerHTML={{ __html: t('sidebar.passion') }} />
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? (
              <Link to="/resume" className="button">
                {t('sidebar.learnMore')}
              </Link>
            ) : (
              <Link to="/about" className="button">
                {t('sidebar.aboutMe')}
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Rutvik Kalathiya <Link to="/">rutvikkalathiya.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
