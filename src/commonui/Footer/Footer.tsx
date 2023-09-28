/* eslint-disable react/no-unescaped-entities */
import React, { FunctionComponent, Fragment } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import moment from 'moment';
import styles from './Footer.module.scss';

interface IFooterProps {
  footertype?: string;
}

const Footer: FunctionComponent<IFooterProps> = () => {
  const currentyear = moment().format('YYYY');

  // functions for navigate to my websites
  const handleInstagramClick = () => {
    const url = 'https://www.instagram.com/sanath_karanth/';
    window.open(url, '_blank');
  };
  const handleLinkedinClick = () => {
    const url = 'https://www.linkedin.com/in/sanath-s-karanth-758bbb176';
    window.open(url, '_blank');
  };
  const handleFacebookClick = () => {
    const url = 'https://www.facebook.com/sanaths.karanth/';
    window.open(url, '_blank');
  };

  return (
    <Fragment>
      <div className={styles['footerContainer-main']}>
        <footer className={styles['footer-content']}>
          <div className={styles['footer-cont']}>
            <div className={styles['footer-Col1-flex']}>
              <h1 className={styles['footer-header-txt']}>Services</h1>
              <span className={styles['footer-desp-txt']}>Web Development</span>
              <span className={styles['footer-desp-txt']}>
                Responsive Web design and development
              </span>
              <span className={styles['footer-desp-txt']}>Web Hosting</span>
              <span className={styles['footer-desp-txt']}>React Website Development</span>
            </div>
            <div>
              <h1 className={styles['footer-about-header-txt']}>About Portfolio</h1>
              <p className={styles['footer-about-desp-txt']}>
                It's a professionally well-designed, detail-oriented portfolio website that
                typically includes the projects (KaranthArtGallery, KaranthResumebuilder, and so on)
                that I've worked on. And also it demonstrates my proficiency in various programming
                languages, frameworks, and technologies used in my projects. As a web developer, I
                ensure that my portfolio website is well-designed and responsive, which can create
                user-friendly experiences.
              </p>
              <div className={styles['footer-social-icon-cont']}>
                <div className={styles['footer-icon-cont']}>
                  <div className={styles['footer-icon-bg']} onClick={handleInstagramClick}>
                    <FaInstagram className={styles['media-icon']} />
                  </div>
                  <div className={styles['footer-icon-bg']} onClick={handleLinkedinClick}>
                    <FaLinkedin className={styles['media-icon']} />
                  </div>
                  <div className={styles['footer-icon-bg']}>
                    <FaFacebookF className={styles['media-icon']} onClick={handleFacebookClick} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['footer-copyright-cont']}>
            <span className={styles['footer-copyright-txt']}>
              Copyright &#169; {currentyear}. All Rights Reserved
            </span>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default React.memo(Footer);
