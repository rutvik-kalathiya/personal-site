import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Projects from '../components/Resume/Projects';
import Certifications from '../components/Resume/Certifications';
// import References from '../components/Resume/References';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

import { skills, categories } from '../data/resume/skills';

const Resume = () => {
  const { t } = useTranslation();

  // Get resume data from translations
  const resumeData = t('resumeData', { returnObjects: true });

  // Section configuration with translated names
  const sectionConfig = [
    {
      key: 'education',
      name: t('pages.resume.sections.education'),
      component: Education,
      data: resumeData.degrees,
    },
    {
      key: 'experience',
      name: t('pages.resume.sections.experience'),
      component: Experience,
      data: resumeData.work,
    },
    {
      key: 'skills',
      name: t('pages.resume.sections.skills'),
      component: Skills,
      data: { skills, categories },
    },
    {
      key: 'projects',
      name: t('pages.resume.sections.projects'),
      component: Projects,
      data: resumeData.projects,
    },
    {
      key: 'certifications',
      name: t('pages.resume.sections.certifications'),
      component: Certifications,
      data: resumeData.certifications,
    },
    // {
    //   key: 'references',
    //   name: t('pages.resume.sections.references'),
    //   component: References,
    //   data: null,
    // },
    // {
    //   key: 'courses',
    //   name: t('pages.resume.sections.courses'),
    //   component: Courses,
    //   data: resumeData.courses,
    // },
    // {
    //   key: 'references',
    //   name: t('pages.resume.sections.references'),
    //   component: References,
    //   data: null,
    // },
  ];

  // Handle anchor scrolling when page loads
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      // Remove the # from the hash
      const elementId = hash.substring(1);
      // Wait a bit for the page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <Main
      title={t('pages.resume.title')}
      description={t('pages.resume.description')}
    >
      <article className="post" id="resume">
        <header>
          <div className="title">
            <div className="title-with-downloads">
              <h2>
                <Link to="resume">{t('pages.resume.title')}</Link>
              </h2>
              <div className="resume-download-section">
                <div className="resume-download-links">
                  <a
                    href="/images/resume/Rutvik-Kalathiya-CV-EN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-download-link"
                    title="Download English Resume PDF"
                  >
                    📄 EN
                  </a>
                  <a
                    href="/images/resume/Rutvik-Kalathiya-CV-DE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-download-link"
                    title="Download German Resume PDF"
                  >
                    📄 DE
                  </a>
                </div>
              </div>
            </div>
            <div className="link-container">
              {sectionConfig.map((section) => (
                <h4 key={section.key}>
                  <a href={`#${section.key}`}>{section.name}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        {sectionConfig.map((section) => {
          const { component: Component, data } = section;
          if (section.key === 'skills') {
            return (
              <div key={section.key}>
                <Component skills={skills} categories={categories} title={section.name} />
              </div>
            );
          }
          return (
            <div key={section.key}>
              {data ? (
                <Component data={data} title={section.name} />
              ) : (
                <Component title={section.name} />
              )}
            </div>
          );
        })}
      </article>
    </Main>
  );
};

export default Resume;
