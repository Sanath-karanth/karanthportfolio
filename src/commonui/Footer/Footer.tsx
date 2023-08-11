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
    const url = 'https://karantharts.netlify.app';
    window.open(url, '_blank');
  };
  const handleLinkedinClick = () => {
    const url = 'https://karanthresumebuilder.netlify.app';
    window.open(url, '_blank');
  };
  const handleFacebookClick = () => {
    const url = 'https://mygymfitness.netlify.app';
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, eaque
                voluptatibus. Eaque tempore quam nesciunt. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eum adipisci blanditiis assumenda atque officiis Vel, fuga facilis
                quia reprehenderit nihil optio harum. Quo sapiente veniam atque corporis tempora non
                repellat
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
