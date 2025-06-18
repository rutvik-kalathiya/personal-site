import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation modules
import navigation from './i18n/navigation';
import sidebar from './i18n/sidebar';
import about from './i18n/about';
import resume from './i18n/resume';
import projects from './i18n/projects';
import stats from './i18n/stats';
import contact from './i18n/contact';
import common from './i18n/common';
import resumeData from './i18n/resume-data';
import projectsData from './i18n/projects-data';

// Combine all translations
const resources = {
  en: {
    translation: {
      // Navigation
      nav: navigation.en,
      // Sidebar
      sidebar: sidebar.en,
      // Pages
      pages: {
        index: common.en.index,
        about: about.en,
        contact: contact.en,
        projects: projects.en,
        resume: resume.en,
        stats: stats.en,
        notFound: common.en.notFound,
      },
      // Common
      common: {
        loading: common.en.loading,
      },
      // Resume data
      resumeData: resumeData.en,
      // Projects data
      projectsData: projectsData.en,
    },
  },
  de: {
    translation: {
      // Navigation
      nav: navigation.de,
      // Sidebar
      sidebar: sidebar.de,
      // Pages
      pages: {
        index: common.de.index,
        about: about.de,
        contact: contact.de,
        projects: projects.de,
        resume: resume.de,
        stats: stats.de,
        notFound: common.de.notFound,
      },
      // Common
      common: {
        loading: common.de.loading,
      },
      // Resume data
      resumeData: resumeData.de,
      // Projects data
      projectsData: projectsData.de,
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en', // Check localStorage first
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already does escaping
    },

    // Debug mode to see what's happening
    debug: true,
  });

export default i18n;
