import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedin, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import Lottie from 'lottie-react';
import styles from './ProfileScreen.module.scss';
import bannerImg from '../../images/banner/banner01.jpg';
import AboutSanathImg from '../../images/profile/SanathIMG30.jpg';

interface ISplashScreenProps {
  classname?: string;
}

const SplashScreen: FunctionComponent<ISplashScreenProps> = () => {
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
      <div className={styles['ProfileContainer-cont']}>
        <div
          className={styles['profile-main-cont']}
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className={styles['profile-cont']}>
            <Row className={`${'gx-0'} ${styles['profile-main-Row']}`}>
              <Col xs={12} md={5} lg={5} xl={5} className={styles['profileCard-img-Col']}>
                <div className={styles['profile-left-cont']}>
                  <div className={styles['profile-img-cont']}>
                    <img
                      src={AboutSanathImg}
                      alt='sanath image'
                      className={styles['profile-pic-img']}
                    ></img>
                  </div>
                  <div className={styles['profile-social-cont']}>
                    <h1 className={styles['profile-header-txt']}>Follow me on</h1>
                    <div className={styles['profile-border-line']}></div>
                    <div className={styles['profile-icon-cont']}>
                      <div className={styles['profile-icon-bg']} onClick={handleInstagramClick}>
                        <FaInstagram className={styles['media-icon']} />
                      </div>
                      <div className={styles['profile-icon-bg']} onClick={handleLinkedinClick}>
                        <FaLinkedin className={styles['media-icon']} />
                      </div>
                      <div className={styles['profile-icon-bg']}>
                        <FaFacebookF
                          className={styles['media-icon']}
                          onClick={handleFacebookClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={7} lg={7} xl={7} className={styles['profileCard-desp-Col']}>
                <div className={styles['profile-desp-cont']}>
                  <h1 className={styles['profile-header-profile-txt']}>Sanath S Karanth</h1>
                  <h3 className={styles['profile-role-txt']}>Software Engineer</h3>
                  <div className={styles['profile-location-cont']}>
                    <FaMapMarkerAlt className={styles['location-icon']} />
                    <span className={styles['profile-location-txt']}>Bangalore, IN</span>
                  </div>

                  {/* <div className={styles['profile-border-line-full']}></div> */}

                  <div className={styles['profile-about-cont']}>
                    <div className={styles['profile-about-icon-bg']}>
                      <FaUserAlt className={styles['about-icon']} />
                    </div>
                    <span className={styles['profile-about-txt']}>About</span>
                  </div>

                  <div className={styles['profile-border-line-full']}></div>

                  <div className={styles['profile-about-desp-cont']}>
                    <h4 className={styles['profile-about-desp-label']}>Email:</h4>
                    <span className={styles['profile-about-desp-txt']}>sanathsk97@gmail.com</span>
                    <h4 className={styles['profile-about-desp-label']}>Phone:</h4>
                    <span className={styles['profile-about-desp-txt']}>+91 9449685219</span>
                    <h4 className={styles['profile-about-desp-label']}>WebSite:</h4>
                    <span className={styles['profile-about-desp-txt']}>
                      <a
                        href='https://karanthportfolio.netlify.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        https://karanthportfolio.netlify.com
                      </a>
                    </span>
                    <h4 className={styles['profile-about-desp-label']}>Skills:</h4>
                    <div className={styles['profile-about-skills-cont']}>
                      <span className={styles['profile-about-skill-txt']}>React JS</span>
                      <span className={styles['profile-about-skill-txt']}>React Native</span>
                      <span className={styles['profile-about-skill-txt']}>HTML5</span>
                      <span className={styles['profile-about-skill-txt']}>CSS3</span>
                      <span className={styles['profile-about-skill-txt']}>Bootstrap</span>
                      <span className={styles['profile-about-skill-txt']}>JavaScript</span>
                      <span className={styles['profile-about-skill-txt']}>TypeScript</span>
                      <span className={styles['profile-about-skill-txt']}>Redux</span>
                      <span className={styles['profile-about-skill-txt']}>Material UI</span>
                      <span className={styles['profile-about-skill-txt']}>
                        Responsive Web Design
                      </span>
                      <span className={styles['profile-about-skill-txt']}>Git version control</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(SplashScreen);
