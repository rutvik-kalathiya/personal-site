import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        about: 'About',
        resume: 'Resume',
        projects: 'Projects',
        stats: 'Stats',
        contact: 'Contact',
      },
      // Pages
      pages: {
        index: {
          title: 'About this site',
          description: 'A beautiful, responsive, statically-generated, react application written with modern Javascript.',
          welcome: 'Welcome to my website. Please feel free to read more',
          aboutMe: 'about me',
          checkOut: ', or you can check out my',
          view: 'view',
          siteStats: 'site statistics',
          orContact: ', or',
          contactMe: 'contact',
          me: 'me',
          sourceAvailable: 'Source available',
          here: 'here',
        },
        about: {
          title: 'About Me',
          description: 'Learn about Rutvik Kalathiya',
          wordCount: '(in about {{count}} words)',
        },
        contact: {
          title: 'Contact',
          description: 'Contact Rutvik Kalathiya via email',
          feelFree: 'Feel free to get in touch. You can email me at:',
        },
        projects: {
          title: 'Projects',
          description: "Learn about Rutvik Kalathiya's projects.",
          subtitle: "A selection of projects that I'm not too ashamed of",
        },
        resume: {
          title: 'Resume',
          description: "Rutvik Kalathiya's Resume",
        },
        stats: {
          title: 'Stats',
          description: 'Some statistics about Rutvik Kalathiya and rutvikkalathiya.com',
        },
        notFound: {
          title: '404 Not Found',
          description: 'The content you are looking for cannot be found.',
          heading: 'Page Not Found',
          return: 'Return',
          home: 'home',
        },
      },
      // Common
      common: {
        loading: 'Loading...',
      },
    },
  },
  de: {
    translation: {
      // Navigation
      nav: {
        about: 'Über mich',
        resume: 'Lebenslauf',
        projects: 'Projekte',
        stats: 'Statistiken',
        contact: 'Kontakt',
      },
      // Pages
      pages: {
        index: {
          title: 'Über diese Website',
          description: 'Eine schöne, responsive, statisch generierte React-Anwendung, geschrieben mit modernem Javascript.',
          welcome: 'Willkommen auf meiner Website. Bitte zögern Sie nicht, mehr zu lesen',
          aboutMe: 'über mich',
          checkOut: ', oder Sie können sich mein',
          view: 'ansehen',
          siteStats: 'Website-Statistiken',
          orContact: ', oder',
          contactMe: 'kontaktieren',
          me: 'Sie mich',
          sourceAvailable: 'Quellcode verfügbar',
          here: 'hier',
        },
        about: {
          title: 'Über mich',
          description: 'Erfahren Sie mehr über Rutvik Kalathiya',
          wordCount: '(in etwa {{count}} Wörtern)',
        },
        contact: {
          title: 'Kontakt',
          description: 'Kontaktieren Sie Rutvik Kalathiya per E-Mail',
          feelFree: 'Zögern Sie nicht, sich zu melden. Sie können mir eine E-Mail schreiben an:',
        },
        projects: {
          title: 'Projekte',
          description: 'Erfahren Sie mehr über Rutvik Kalathiyas Projekte.',
          subtitle: 'Eine Auswahl von Projekten, für die ich mich nicht zu sehr schäme',
        },
        resume: {
          title: 'Lebenslauf',
          description: 'Rutvik Kalathiyas Lebenslauf',
        },
        stats: {
          title: 'Statistiken',
          description: 'Einige Statistiken über Rutvik Kalathiya und rutvikkalathiya.com',
        },
        notFound: {
          title: '404 Nicht gefunden',
          description: 'Der gesuchte Inhalt konnte nicht gefunden werden.',
          heading: 'Seite nicht gefunden',
          return: 'Zurück zur',
          home: 'Startseite',
        },
      },
      // Common
      common: {
        loading: 'Laden...',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already does escaping
    },

    // Save language to localStorage
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
