import React, { Fragment, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faUser, faXmark, faXmarkCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './ServicesScreen.module.scss';
import Modal from '../../commonui/Modal/Modal';
import serviceIcon1 from '../../images/frameIcons/services/services1.png';
import serviceIcon2 from '../../images/frameIcons/services/services2.png';
import serviceIcon3 from '../../images/frameIcons/services/services3.png';
import UIUXImg1 from '../../images/frameIcons/services/UIUXImg1.jpg';
import myworkservice1 from '../../images/frameIcons/services/myworkservice1.png';
import myworkservice2 from '../../images/frameIcons/services/myworkservice2.png';

interface IServicesScreenProps {
  classname?: string;
}

interface IModalUIUXProps {
  showprop?: boolean;
  onHideprop: () => void;
  styleprop?: any;
  backdropprop?: any;
  sizeprop?: any;
  scrollableprop?: boolean;
  alignprop?: boolean;
}

const ServicesScreen: FunctionComponent<IServicesScreenProps> = () => {
  const [showUIUX, setShowUIUX] = useState<boolean>(false);
  const [showWebDesign, setShowWebDesign] = useState<boolean>(false);
  const [showWebDev, setShowWebDev] = useState<boolean>(false);

  const handleCloseUIUX = () => setShowUIUX(false);
  const handleShowUIUX = () => setShowUIUX(true);

  const ModalUIUX: FunctionComponent<IModalUIUXProps> = (props) => {
    return (
      <Fragment>
        <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
          <div className={styles['fullScreen-header']}>
            <h1 className={styles['fullScreen-header-txt']}>UI/UX DESIGN</h1>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              size='lg'
              className={styles['close-icon']}
              onClick={handleCloseUIUX}
            />
          </div>
          <hr className={styles['fullScreen-hr']}></hr>
          <div className={styles['fullScreen-cont']}>
            <div className={styles['fullScreen-title']}>
              <h2 className={styles['fullScreen-title-txt']}>What is UX / UI Design?</h2>
            </div>
            <div className={styles['fullScreen-img-cont']}>
              <img className={styles['fullScreen-img']} src={UIUXImg1} alt='image'></img>
            </div>
            <div className={styles['fullScreen-desp']}>
              <ul>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    UX design is all about identifying and solving user problems; UI design is all
                    about creating intuitive, aesthetically-pleasing, interactive interfaces.
                  </p>
                </li>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    UX design focuses on the interaction that a human user has with everyday
                    products and services. The goal of UX design is to make using these products and
                    services, both digital or physical, easy, logical, and fun.
                  </p>
                </li>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    User interface design or user interface engineering is the design of user
                    interfaces for machines and software, such as computers, home appliances, mobile
                    devices, and other electronic devices, with the focus on maximizing usability
                    and the user experience.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles['fullScreen-title']}>
              <h2 className={styles['fullScreen-title-txt']}>My Work:</h2>
            </div>
            <div>
              <Row className='gx-0'>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <div className={styles['fullScreen-img-cont']}>
                    <img
                      className={styles['fullScreen-mywork-img']}
                      src={myworkservice1}
                      alt='image'
                    ></img>
                  </div>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <div className={styles['fullScreen-img-cont']}>
                    <img
                      className={styles['fullScreen-mywork-img']}
                      src={myworkservice2}
                      alt='image'
                    ></img>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  };

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
      <ModalUIUX
        showprop={showUIUX}
        onHideprop={() => setShowUIUX(false)}
        sizeprop={'xl'}
        scrollableprop={true}
        alignprop={true}
      />
      <div className={styles['ServicesContainer-service']}>
        <div className={styles['serviceTitle-cont']}>
          <Row className='gx-0'>
            <Col xs={8} md={6} lg={6} xl={8} className={styles['serviceTitle-left-Col']}>
              <div className={styles['serviceTitle-left-cont']}>
                <div className={styles['serviceTitle-txt-border']} id='servicetxt-cont'>
                  <h1 className={styles['services-txt']}>Services</h1>
                </div>
              </div>
            </Col>
            <Col xs={8} md={6} lg={6} xl={4} className={styles['serviceTitle-right-Col']}></Col>
          </Row>
        </div>
        <div className={styles['serviceCard-cont']}>
          <Row className='gx-0'>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['serviceCard1-Col']}>
              <div className={styles['serviceCardContainer']} onClick={handleShowUIUX}>
                <div className={styles['serviceCard-img-cont']}>
                  <img className={styles['serviceCard-img']} src={serviceIcon1} alt='image'></img>
                </div>

                <div className={styles['serviceCard-title-cont']}>
                  <h2 className={styles['serviceCard-title-txt']}>UI/UX DESIGN</h2>
                </div>
                <div className={styles['serviceCardContainer-line']}></div>
                <div className={styles['serviceCard-desp-cont']}>
                  <span className={styles['serviceCard-desp-txt']}>
                    Providing you a best <b>UI/UX</b> wireframe designs using <b>Figma</b> tool for
                    the websites featuring a clean interface with easy navigation to highlight my
                    projects effectively.
                  </span>
                </div>
              </div>
              <div className={styles['serviceCardContainer-border']}></div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['serviceCard2-Col']}>
              <div className={styles['serviceCardContainer']}>
                <div className={styles['serviceCard-img-cont']}>
                  <img className={styles['serviceCard-img']} src={serviceIcon2} alt='image'></img>
                </div>
                <div className={styles['serviceCard-title-cont']}>
                  <h2 className={styles['serviceCard-title-txt']}>WEB DESIGN</h2>
                </div>
                <div className={styles['serviceCardContainer-line']}></div>
                <div className={styles['serviceCard-desp-cont']}>
                  <span className={styles['serviceCard-desp-txt']}>
                    My web design for the websites showcases a modern and captivating layout that
                    reflects my creative style.The design features a modern interface, offering easy
                    navigation and quick access to the projects.
                  </span>
                </div>
              </div>
              <div className={styles['serviceCardContainer-border']}></div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['serviceCard3-Col']}>
              <div className={styles['serviceCardContainer']}>
                <div className={styles['serviceCard-img-cont']}>
                  <img className={styles['serviceCard-img']} src={serviceIcon3} alt='image'></img>
                </div>
                <div className={styles['serviceCard-title-cont']}>
                  <h2 className={styles['serviceCard-title-txt']}>WEB DEVELOPMENT</h2>
                </div>
                <div className={styles['serviceCardContainer-line']}></div>
                <div className={styles['serviceCard-desp-cont']}>
                  <span className={styles['serviceCard-desp-txt']}>
                    For Web Development, I have utilized cutting-edge front-end technologies like
                    <b> ReactJS</b> framework to craft a visually appealing and user-friendly
                    interface. The website is fully <b>responsive</b>, ensuring optimal viewing and
                    functionality across devices.
                  </span>
                </div>
              </div>
              <div className={styles['serviceCardContainer-border']}></div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(ServicesScreen);
