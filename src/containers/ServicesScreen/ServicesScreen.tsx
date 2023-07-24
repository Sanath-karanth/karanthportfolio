import React, { Fragment, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import styles from './ServicesScreen.module.scss';

interface IServicesScreenProps {
  classname?: string;
}

const ServicesScreen: FunctionComponent<IServicesScreenProps> = () => {
  const navigate = useNavigate();

  // UseEffect code for onScroll to appear service text
  // useEffect(() => {
  //   function onScroll() {
  //     const currentPosition = window.scrollY;
  //     const serviceTxtElement: HTMLElement | null = document.querySelector('#servicetxt-cont');
  //     if (currentPosition > 0) {
  //       // downscroll code
  //       if (window.innerWidth < 767) {
  //         serviceTxtElement &&
  //           (serviceTxtElement && (serviceTxtElement.style.transform = 'translateX(0rem)'),
  //           (serviceTxtElement.style.transition = ' 3s ease-out'));
  //       }
  //       if (window.innerWidth > 767 && window.innerWidth < 1023) {
  //         serviceTxtElement &&
  //           (serviceTxtElement && (serviceTxtElement.style.transform = 'translateX(13rem)'),
  //           (serviceTxtElement.style.transition = ' 3s ease-out'));
  //       }
  //       if (window.innerWidth > 1024) {
  //         serviceTxtElement &&
  //           (serviceTxtElement && (serviceTxtElement.style.transform = 'translateX(26rem)'),
  //           (serviceTxtElement.style.transition = ' 2s ease-out'));
  //       }
  //     } else {
  //       // upscroll code
  //       if (window.innerWidth < 767) {
  //         serviceTxtElement &&
  //           (serviceTxtElement && (serviceTxtElement.style.transform = 'translateX(0rem)'),
  //           (serviceTxtElement.style.transition = ' 3s ease-out'));
  //       }
  //       if (window.innerWidth > 767 && window.innerWidth < 1023) {
  //         serviceTxtElement &&
  //           (serviceTxtElement && (serviceTxtElement.style.transform = 'translateX(0rem)'),
  //           (serviceTxtElement.style.transition = ' 3s ease-out'));
  //       }
  //       if (window.innerWidth > 1024) {
  //         serviceTxtElement &&
  //           (serviceTxtElement && (serviceTxtElement.style.transform = 'translateX(0rem)'),
  //           (serviceTxtElement.style.transition = ' 2s ease-out'));
  //       }
  //     }
  //   }

  //   window.addEventListener('scroll', onScroll);
  //   window.addEventListener('resize', () => {
  //     onScroll();
  //   });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <Fragment>
      <div className={styles['ServicesContainer-service']}>
        <div className={styles['serviceTitle-cont']}>
          <Row className='gx-0'>
            <Col sm={2} md={6} lg={6} className={styles['serviceTitle-left-Col']}>
              <div className={styles['serviceTitle-left-cont']}>
                <div className={styles['serviceTitle-txt-border']} id='servicetxt-cont'>
                  <h1 className={styles['services-txt']}>Services</h1>
                </div>
              </div>
            </Col>
            <Col sm={2} md={6} lg={6} className={styles['serviceTitle-right-Col']}></Col>
          </Row>
        </div>
        <div className={styles['serviceCard-cont']}>
          <h2>Cards</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(ServicesScreen);
