import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => {
  // SEO-optimized default values
  const defaultDescription = 'Rutvik Kalathiya - Senior Software Engineer & Full Stack Developer with 3+ years experience. TU Chemnitz graduate specializing in React, Next.js, Node.js, and cloud-based SaaS platforms. Currently leading development of NetzPortal at prp project:people for the energy sector using modern web technologies.';
  const defaultKeywords = 'Rutvik Kalathiya, Software Developer, Software Engineer, Senior Software Engineer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, TU Chemnitz, prp project:people, NetzPortal, Energy Sector, Web Development, SaaS Platform, JavaScript Developer, TypeScript, AWS, Frontend Developer, Backend Developer';

  const siteUrl = 'https://rutvikkalathiya.com';
  const pageUrl = `${siteUrl}${props.currentPath || ''}`;
  const imageUrl = `${siteUrl}/images/me.jpg`;

  // Structured data for better SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rutvik Kalathiya',
    jobTitle: 'Full Stack Developer',
    description: 'Software Engineer and Full Stack Developer with expertise in React, Node.js, and cloud technologies',
    url: siteUrl,
    image: imageUrl,
    sameAs: [
      'https://github.com/rutvik-kalathiya',
      'https://linkedin.com/in/rutvik-kalathiya',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'prp project:people GmbH',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Technical University of Chemnitz',
    },
    knowsAbout: [
      'Software Development',
      'Full Stack Development',
      'React',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Cloud Computing',
      'SaaS Platforms',
    ],
  };

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet
        titleTemplate="%s | Rutvik Kalathiya - Full Stack Developer"
        defaultTitle="Rutvik Kalathiya - Full Stack Developer & Software Engineer"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}

        {/* Basic Meta Tags */}
        <meta name="description" content={props.description || defaultDescription} />
        <meta name="keywords" content={props.keywords || defaultKeywords} />
        <meta name="author" content="Rutvik Kalathiya" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Rutvik Kalathiya" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title ? `${props.title} | Rutvik Kalathiya` : 'Rutvik Kalathiya - Full Stack Developer & Software Engineer'} />
        <meta property="og:description" content={props.description || defaultDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rutvik Kalathiya - Full Stack Developer" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title ? `${props.title} | Rutvik Kalathiya` : 'Rutvik Kalathiya - Full Stack Developer & Software Engineer'} />
        <meta name="twitter:description" content={props.description || defaultDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Rutvik Kalathiya - Full Stack Developer" />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="DE-SN" />
        <meta name="geo.placename" content="Chemnitz" />
        <meta name="geo.position" content="50.827844;12.921444" />
        <meta name="ICBM" content="50.827844, 12.921444" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">{props.children}</div>
        {props.fullPage ? null : <SideBar />}
      </div>
    </HelmetProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  currentPath: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: null,
  keywords: null,
  currentPath: '',
};

export default Main;
