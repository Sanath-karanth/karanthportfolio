import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './AboutComponent.module.scss';
import { Button as ButtonUI } from '../../commonui';

// Images import
import AboutSanathImg from '../../images/profile/SanathIMG20.jpg';

interface IPortfolioComponentProps {
  classname?: string;
}

const PortfolioComponent: FunctionComponent<IPortfolioComponentProps> = () => {
  // functions for navigate to my websites
  const handleportfolioartClick = () => {
    const url = 'https://karantharts.netlify.app';
    window.open(url, '_blank');
  };
  const handleportfolioresumeClick = () => {
    const url = 'https://karanthresumebuilder.netlify.app';
    window.open(url, '_blank');
  };
  const handleportfoliomygymClick = () => {
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
                    <div className={styles['text-abt']}>My Profile</div>
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
