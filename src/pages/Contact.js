import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Main
      title={t('pages.contact.title')}
      description={t('pages.contact.description')}
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">{t('pages.contact.title')}</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>{t('pages.contact.feelFree')} </p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
