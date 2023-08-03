import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import styles from './AboutComponent.module.scss';
import { Button as ButtonUI } from '../../commonui';

// Images import
import AboutSanathImg from '../../images/profile/SanathIMG20.jpg';

interface IPortfolioComponentProps {
  classname?: string;
}

const PortfolioComponent: FunctionComponent<IPortfolioComponentProps> = () => {
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
      <div className={styles['AboutContainer']}>
        <div className={styles['about-Title-cont']}>
          <Row className='gx-0'>
            <Col xs={8} md={6} lg={6} xl={4} className={styles['about-left-Col']}></Col>
            <Col xs={8} md={6} lg={6} xl={8} className={styles['about-right-Col']}>
              <div className={styles['about-left-cont']}>
                <div className={styles['about-txt-background']} id='about-txt-cont'>
                  <h1 className={styles['about-txt']}>About</h1>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles['aboutCard-cont']}>
          <Row className={`${'gx-0'} ${styles['about-main-Row']}`}>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['aboutCard-left-Col']}>
              <div className={styles['about-img-card']}>
                <div className={styles['about-pic-container']}>
                  <img
                    src={AboutSanathImg}
                    alt='sanath image'
                    className={styles['about-pic-img']}
                  ></img>
                  <div className={styles['about-overlay']}>
                    <div className={styles['about-overlay-content']}>
                      <div className={styles['about-icon-cont']}>
                        <div className={styles['about-icon-bg']} onClick={handleInstagramClick}>
                          <FaInstagram className={styles['media-icon']} />
                        </div>
                        <div className={styles['about-icon-bg']} onClick={handleLinkedinClick}>
                          <FaLinkedin className={styles['media-icon']} />
                        </div>
                        <div className={styles['about-icon-bg']}>
                          <FaFacebookF
                            className={styles['media-icon']}
                            onClick={handleFacebookClick}
                          />
                        </div>
                      </div>
                      <div className={styles['aboutCont-border-line']}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8} lg={8} xl={8} className={styles['aboutCard-right-Col']}>
              <div className={styles['about-details-card']}>
                <div className={styles['about-header-cont']}>
                  <h4 className={styles['about-header-txt']}>About Me</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(PortfolioComponent);
