import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import ContactForm from '../components/Contact/ContactForm';

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
        <ContactForm />
        <div className="contact-separator">
          {/* <p>{t('pages.contact.connectSocial')}</p> */}
          <ContactIcons />
        </div>
        {/* <div className="email-at">
          <p>{t('pages.contact.feelFree')} </p>
          <EmailLink />
        </div> */}
      </article>
    </Main>
  );
};

export default Contact;
