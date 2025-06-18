import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
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
      <h2>About</h2>

      {/* <p>
        Hi, I&apos;m Rutvik. I am a graduate of TU Chemnitz and
        a full-stack developer with 3+ years of experience.
        Currently, I&apos;m working at PurpleLeafStrategy, where I build Enavia —
        a cloud-based SaaS platform transforming pharmaceutical brand planning.
      </p> */}
      <p>
        Hi, I&apos;m Rutvik! 👋 I&apos;m a <a href="https://www.tu-chemnitz.de" target="_blank" rel="noopener noreferrer">TU Chemnitz</a> graduate and passionate
        full-stack developer with 3+ years of experience building scalable web applications.
      </p>
      <p>
        Currently, I&apos;m engineering the future at <strong><a href="https://www.purpleleafstrategy.com" target="_blank" rel="noopener noreferrer">PurpleLeafStrategy</a></strong>,
        where I develop <em><a href="https://www.enavia.io" target="_blank" rel="noopener noreferrer">Enavia</a></em> — an innovative cloud-based SaaS platform
        that&apos;s revolutionizing pharmaceutical brand planning and analytics.
      </p>
      <p>
        I love crafting elegant solutions with modern technologies, from React frontends
        to robust backend systems. When I&apos;m not coding, you&apos;ll find me exploring
        new tech trends, contributing to open source, or planning my next adventure! ✨
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
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

export default SideBar;
