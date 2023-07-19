import React, { FunctionComponent, Fragment, useEffect, useCallback, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../containers/MainScreen/MainScreen.css';
import styles from './Header.module.scss';
import headerLogo from '../../images/header/header.png';
import { IProductOrderDetailsData, IProductOrderResponse } from '../../models/HeaderModels';

interface IHeaderProps {
  headertype?: string;
}

const Header: FunctionComponent<IHeaderProps> = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [colDeskShow, setColDeskShow] = useState<boolean>(true);
  const [colMobileShow, setColMobileShow] = useState<boolean>(false);

  // UseEffect code for onScroll top bottom header color change for Desktop
  useEffect(() => {
    function onScroll() {
      const currentPosition = window.scrollY;
      const imgLogoElement: HTMLElement | null = document.querySelector('#img-logo-desktop');
      const headerElement: HTMLElement | null = document.querySelector('#headerContDesktop');
      if (currentPosition !== 0) {
        headerElement && (headerElement.style.background = '#FFF');
      } else {
        headerElement && (headerElement.style.background = 'transparent');
      }
      if (currentPosition > scrollTop) {
        // downscroll code

        imgLogoElement &&
          ((imgLogoElement.style.transform = 'scale(1.2)'),
          (imgLogoElement.style.transition = ' 0.6s ease-out'));

        headerElement &&
          ((headerElement.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 15px 20px -10px'),
          (headerElement.style.transition = ' 0.6s ease-out'));
      } else {
        // upscroll code
        imgLogoElement &&
          ((imgLogoElement.style.transform = 'scale(1)'),
          (imgLogoElement.style.transition = ' 0.6s ease-out'));
        headerElement &&
          ((headerElement.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 0px 0px -10px'),
          (headerElement.style.transition = ' 0.6s ease-out'));
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  // UseEffect code for onScroll top bottom header color change for Mobile
  useEffect(() => {
    function onScroll() {
      const currentPosition = window.scrollY;
      const imgLogoElement: HTMLElement | null = document.querySelector('#img-logo-mobile');
      const headerElement: HTMLElement | null = document.querySelector('#headerContMobile');
      if (currentPosition !== 0) {
        headerElement && (headerElement.style.background = '#FFF');
      } else {
        headerElement && (headerElement.style.background = 'transparent');
      }
      if (currentPosition > scrollTop) {
        // downscroll code

        imgLogoElement &&
          ((imgLogoElement.style.transform = 'scale(1.2)'),
          (imgLogoElement.style.transition = ' 0.6s ease-out'));

        headerElement &&
          ((headerElement.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 15px 20px -10px'),
          (headerElement.style.transition = ' 0.6s ease-out'));
      } else {
        // upscroll code
        imgLogoElement &&
          ((imgLogoElement.style.transform = 'scale(1)'),
          (imgLogoElement.style.transition = ' 0.6s ease-out'));
        headerElement &&
          ((headerElement.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 0px 0px -10px'),
          (headerElement.style.transition = ' 0.6s ease-out'));
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  // UseEffect code to put condition for window size for mobile
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 764) {
        setColDeskShow(false);
        setColMobileShow(true);
      } else if (window.innerWidth > 764) {
        setColDeskShow(true);
        setColMobileShow(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [colDeskShow, colMobileShow]);

  return (
    <Fragment>
      <div className={styles['headerContainer-main']}>
        <div className={styles['header-Desktop']}>
          <header className={styles['header-cont']} id='headerContDesktop'>
            <Row className='gx-0'>
              <Col xs={2} md={2} className={styles['header-logo-Col']}>
                <div className={styles['header-img-cont']}>
                  <img
                    className={styles['header-logo']}
                    id='img-logo-desktop'
                    src={headerLogo}
                    alt='logo'
                  ></img>
                </div>
              </Col>
              <Col xs={8} md={8} className={styles['header-center-Col']}>
                {colDeskShow && (
                  <div className={styles['header-txt-cont']}>
                    <nav>
                      <span className={styles['header-nav-txt']}>
                        <a href='#home' className='active'>
                          Home
                        </a>
                      </span>
                      <span className={styles['header-nav-txt']}>
                        <a href='#services'>Services</a>
                      </span>
                      <span className={styles['header-nav-txt']}>
                        <a href='#portfolio'>Portfolio</a>
                      </span>
                      <span className={styles['header-nav-txt']}>
                        <a href='#contact'>Contact</a>
                      </span>
                    </nav>
                  </div>
                )}
              </Col>
              <Col xs={2} md={2} className={styles['header-right-Col']}>
                <div className={styles['header-about-cont']}>
                  <span className={styles['header-about-txt']}>
                    <a href='#about' className={styles['anchor-btn']}>
                      ABOUT
                    </a>
                  </span>
                </div>
              </Col>
              <Col xs={12} md={12} className={styles['header-txt-mobile-Col']}>
                {colMobileShow && (
                  <div className={styles['header-txt-mobile-cont']}>
                    <nav>
                      <span className={styles['header-nav-txt']}>
                        <a href='#home' className='active'>
                          Home
                        </a>
                      </span>
                      <span className={styles['header-nav-txt']}>
                        <a href='#services'>Services</a>
                      </span>
                      <span className={styles['header-nav-txt']}>
                        <a href='#portfolio'>Portfolio</a>
                      </span>
                      <span className={styles['header-nav-txt']}>
                        <a href='#contact'>Contact</a>
                      </span>
                    </nav>
                  </div>
                )}
              </Col>
            </Row>
          </header>
        </div>
        {/* Mobile View */}
        {/* <div className={styles['header-Mobile']}>
          <header className={styles['header-cont']} id='headerContMobile'>
            <Row className='gx-0'>
              <Col xs={3} md={3} className={styles['header-logo-Col']}>
                <div className={styles['header-img-cont']}>
                  <img
                    className={styles['header-logo']}
                    id='img-logo-mobile'
                    src={headerLogo}
                    alt='logo'
                  ></img>
                </div>
              </Col>
              <Col xs={6} md={6} className={styles['header-right-Col']}></Col>
              <Col xs={3} md={3} className={styles['header-right-Col']}>
                <div className={styles['header-about-cont']}>
                  <span className={styles['header-about-txt']}>
                    <a href='#about'>ABOUT</a>
                  </span>
                </div>
              </Col>
            </Row>
            <div className={styles['header-label-txt']}>
              <nav className='headernav'>
                <div className={styles['header-nav-txt']}>
                  <a href='#home' className='active'>
                    Home
                  </a>
                </div>
                <div className={styles['header-nav-txt']}>
                  <a href='#services'>Services</a>
                </div>
                <div className={styles['header-nav-txt']}>
                  <a href='#portfolio'>Portfolio</a>
                </div>
                <div className={styles['header-nav-txt']}>
                  <a href='#contact'>Contact</a>
                </div>
              </nav>
            </div>
          </header>
        </div> */}
      </div>
    </Fragment>
  );
};

export default React.memo(Header);
