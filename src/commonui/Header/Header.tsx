import React, { FunctionComponent, Fragment, useEffect, useCallback, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../containers/MainScreen/MainScreen.css';
import styles from './Header.module.scss';
import headerLogo from '../../images/header/header.png';
import { Divide as Hamburger } from 'hamburger-react';

interface IHeaderProps {
  headertype?: string;
}

const Header: FunctionComponent<IHeaderProps> = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [colDeskShow, setColDeskShow] = useState<boolean>(true);
  const [colMobileShow, setColMobileShow] = useState<boolean>(true);
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setOpen(!isOpen);
    const headerTextDivElement: HTMLElement | null = document.querySelector('#header-navtxt');
    if (isOpen) {
      headerTextDivElement &&
        ((headerTextDivElement.style.display = 'none'),
        (headerTextDivElement.style.transition = ' 2s ease-out'));
    } else {
      headerTextDivElement &&
        ((headerTextDivElement.style.display = 'block'),
        (headerTextDivElement.style.transition = ' 2s ease-out'));
    }
  }, [isOpen]);

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
  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 767) {
  //       setColDeskShow(false);
  //       setColMobileShow(true);
  //     } else if (window.innerWidth > 767) {
  //       setColDeskShow(true);
  //       setColMobileShow(false);
  //     }
  //     return window.innerWidth;
  //   }
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize, false);
  // }, [colDeskShow, colMobileShow]);

  return (
    <Fragment>
      <div className={styles['headerContainer-main']}>
        <header className={styles['header-cont']} id='headerContDesktop'>
          <div className={styles['header-mainflex']}>
            <div className={styles['header-img-cont']}>
              <img
                className={styles['header-logo']}
                id='img-logo-desktop'
                src={headerLogo}
                alt='logo'
              ></img>
            </div>
            <div
              className={styles['header-txt-cont']}
              id='header-navtxt'
              style={{ transition: ' all 2s ease-out 0s' }}
            >
              <nav className={styles['header-nav']}>
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
            <div className={styles['header-about-cont']}>
              <div className={styles['header-desktop']}>
                <span className={styles['header-about-txt']}>
                  <a href='#about' className={styles['anchor-btn']}>
                    ABOUT
                  </a>
                </span>
              </div>
              <div className={styles['header-mobile']}>
                <Hamburger toggled={isOpen} toggle={toggleMenu} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default React.memo(Header);
