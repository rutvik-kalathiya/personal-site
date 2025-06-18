import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        type="button"
      >
        EN
      </button>
      <span className="separator">|</span>
      <button
        className={`lang-btn ${i18n.language === 'de' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('de')}
        type="button"
      >
        DE
      </button>
    </div>
  );
};

export default LanguageToggle;
