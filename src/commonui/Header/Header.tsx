import React, { FunctionComponent, Fragment, useEffect, useCallback, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../containers/MainScreen/MainScreen.css';
import styles from './Header.module.scss';
import headerLogo from '../../images/header/header.png';
import { IProductOrderDetailsData, IProductOrderResponse } from '../../models/HeaderModels';

interface IHeaderProps {
  headertype?: string;
  // productOrderDetails: IProductOrderResponse;
}

const Header: FunctionComponent<IHeaderProps> = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.scrollY;
      const imgLogoElement: HTMLElement | null = document.querySelector('#img-logo');
      const headerElement: HTMLElement | null = document.querySelector('#headerCont');
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
          ((headerElement.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 8px 8px -10px'),
          (headerElement.style.transition = ' 0.6s ease-out'));
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Fragment>
      <div className={styles['headerContainer-main']}>
        <header className={styles['header-cont']} id='headerCont'>
          <Row className='gx-0'>
            <Col xs={2} md={2} className={styles['header-logo-Col']}>
              <div className={styles['header-img-cont']}>
                <img
                  className={styles['header-logo']}
                  id='img-logo'
                  src={headerLogo}
                  alt='logo'
                ></img>
              </div>
            </Col>
            <Col xs={9} md={9} className={styles['header-center-Col']}>
              <div className={styles['header-label-txt']}>
                <header>
                  <nav className='headernav'>
                    <span className={styles['header-nav-txt']}>
                      <a href='#home' className='active'>
                        Home
                      </a>
                    </span>
                    <span className={styles['header-nav-txt']}>
                      <a href='#about'>About</a>
                    </span>
                    <span className={styles['header-nav-txt']}>
                      <a href='#services'>Services</a>
                    </span>
                    <span className={styles['header-nav-txt']}>
                      <a href='#contact'>Contact</a>
                    </span>
                  </nav>
                </header>
              </div>
            </Col>
            <Col xs={1} md={1} className={styles['header-right-Col']}>
              <nav className='headernav'>
                <span className={styles['header-nav-txt']}>
                  <a href='#ABOUT'>ABOUT</a>
                </span>
              </nav>
            </Col>
          </Row>
        </header>
      </div>
    </Fragment>
  );
};

export default React.memo(Header);
