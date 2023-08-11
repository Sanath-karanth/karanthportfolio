import React, { Fragment, FunctionComponent, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './ServicesComponent.module.scss';
import { Button as ButtonUI, ModalCommon } from '../../commonui';
import serviceIcon1 from '../../images/mainscreenImages/services/services1.png';
import serviceIcon2 from '../../images/mainscreenImages/services/services2.png';
import serviceIcon3 from '../../images/mainscreenImages/services/services3.png';
import UIUXImg from '../../images/mainscreenImages/services/UIUXImg.jpg';
import webdesignImg from '../../images/mainscreenImages/services/webdesignImg.png';
import webdevImg from '../../images/mainscreenImages/services/webdevImg.png';
import myworkservice1 from '../../images/mainscreenImages/services/myworkservice1.png';
import myworkservice2 from '../../images/mainscreenImages/services/myworkservice2.png';

interface IServicesComponentProps {
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

const ServicesComponent: FunctionComponent<IServicesComponentProps> = () => {
  const [showUIUX, setShowUIUX] = useState<boolean>(false);
  const [showWebDesign, setShowWebDesign] = useState<boolean>(false);
  const [showWebDev, setShowWebDev] = useState<boolean>(false);

  // functions for modal open/close for UIUX
  const handleCloseUIUX = () => setShowUIUX(false);
  const handleShowUIUX = () => setShowUIUX(true);

  // functions for modal open/close for Web Design
  const handleCloseWebDesign = () => setShowWebDesign(false);
  const handleShowWebDesign = () => setShowWebDesign(true);

  // functions for modal open/close for Web Development
  const handleCloseWebDev = () => setShowWebDev(false);
  const handleShowWebDev = () => setShowWebDev(true);

  // UseEffect code for onScroll to appear service text
  // useEffect(() => {
  //   function onScroll() {
  //     const currentPosition = window.scrollY;
  //     const serviceTxtElement: HTMLElement | null = document.querySelector('#service-txt-cont');
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

  const ModalUIUX: FunctionComponent<IModalUIUXProps> = (props) => {
    return (
      <Fragment>
        <ModalCommon {...props} aria-labelledby='contained-modal-title-vcenter'>
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
              <img className={styles['fullScreen-img']} src={UIUXImg} alt='image'></img>
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
        </ModalCommon>
      </Fragment>
    );
  };

  const ModalWebDesign: FunctionComponent<IModalUIUXProps> = (props) => {
    return (
      <Fragment>
        <ModalCommon {...props} aria-labelledby='contained-modal-title-vcenter'>
          <div className={styles['fullScreen-header']}>
            <h1 className={styles['fullScreen-header-txt']}>WEB DESIGN</h1>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              size='lg'
              className={styles['close-icon']}
              onClick={handleCloseWebDesign}
            />
          </div>
          <hr className={styles['fullScreen-hr']}></hr>
          <div className={styles['fullScreen-cont']}>
            <div className={styles['fullScreen-title']}>
              <h2 className={styles['fullScreen-title-txt']}>What is Web Designing?</h2>
            </div>
            <div className={styles['fullScreen-img-cont']}>
              <img className={styles['fullScreen-img']} src={webdesignImg} alt='image'></img>
            </div>
            <div className={styles['fullScreen-desp']}>
              <ul>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    Web designing is the process of planning, conceptualizing, and implementing the
                    plan for designing a website in a way that is functional and offers a good user
                    experience. User experience is central to the web designing process.
                  </p>
                </li>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    A web designer works on the appearance, layout, and, in some cases, content of a
                    website. Appearance, for instance, relates to the colors, font, and images used.
                  </p>
                </li>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    It identifies the goals of a website or webpage and promotes accessibility for
                    all potential users. This process involves organizing content and images across
                    a series of pages and integrating applications and other interactive elements.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </ModalCommon>
      </Fragment>
    );
  };

  const ModalWebDev: FunctionComponent<IModalUIUXProps> = (props) => {
    return (
      <Fragment>
        <ModalCommon {...props} aria-labelledby='contained-modal-title-vcenter'>
          <div className={styles['fullScreen-header']}>
            <h1 className={styles['fullScreen-header-txt']}>WEB DEVELOPMENT</h1>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              size='lg'
              className={styles['close-icon']}
              onClick={handleCloseWebDev}
            />
          </div>
          <hr className={styles['fullScreen-hr']}></hr>
          <div className={styles['fullScreen-cont']}>
            <div className={styles['fullScreen-title']}>
              <h2 className={styles['fullScreen-title-txt']}>What is Web Development?</h2>
            </div>
            <div className={styles['fullScreen-img-cont']}>
              <img className={styles['fullScreen-img']} src={webdevImg} alt='image'></img>
            </div>
            <div className={styles['fullScreen-desp']}>
              <ul>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    Website development is a catch-all term for the work that goes into building a
                    website. This includes everything from markup and coding to scripting, network
                    configuration, and CMS development.
                  </p>
                </li>
                <li>
                  <p className={styles['fullScreen-desp-txt']}>
                    While web development typically refers to web markup and coding, website
                    development includes all related development tasks, such as client-side
                    scripting, server-side scripting, server and network security configuration,
                    eCommerce development, and content management system (CMS) development.
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
          </div>
        </ModalCommon>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <ModalUIUX
        showprop={showUIUX}
        onHideprop={() => setShowUIUX(false)}
        sizeprop={'xl'}
        scrollableprop={true}
        alignprop={true}
      />
      <ModalWebDesign
        showprop={showWebDesign}
        onHideprop={() => setShowWebDesign(false)}
        sizeprop={'xl'}
        scrollableprop={true}
        alignprop={true}
      />
      <ModalWebDev
        showprop={showWebDev}
        onHideprop={() => setShowWebDev(false)}
        sizeprop={'xl'}
        scrollableprop={true}
        alignprop={true}
      />
      <div className={styles['ServicesContainer-service']}>
        {/* <div className={styles['serviceTitle-cont']}>
          <Row className='gx-0'>
            <Col xs={8} md={6} lg={6} xl={8} className={styles['serviceTitle-left-Col']}>
              <div className={styles['serviceTitle-left-cont']}>
                <div className={styles['serviceTitle-txt-background']} id='service-txt-cont'>
                  <h1 className={styles['services-txt']}>Services</h1>
                </div>
              </div>
            </Col>
            <Col xs={8} md={6} lg={6} xl={4} className={styles['serviceTitle-right-Col']}></Col>
          </Row>
        </div> */}
        <div className={styles['serviceCard-cont']}>
          <Row className='gx-0'>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['serviceCard1-Col']}>
              <div className={styles['serviceCardContainer']}>
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
                <ButtonUI
                  varientprop={'outline-danger'}
                  classnameprop={styles['button-explore']}
                  styleprop={{ padding: '0px' }}
                  click={handleShowUIUX}
                  disableButtonprop={false}
                  buttonnameprop={'Explore'}
                ></ButtonUI>
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
                <ButtonUI
                  varientprop={'outline-danger'}
                  classnameprop={styles['button-explore']}
                  styleprop={{ padding: '0px' }}
                  click={handleShowWebDesign}
                  disableButtonprop={false}
                  buttonnameprop={'Explore'}
                ></ButtonUI>
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
                <ButtonUI
                  varientprop={'outline-danger'}
                  classnameprop={styles['button-explore']}
                  styleprop={{ padding: '0px' }}
                  click={handleShowWebDev}
                  disableButtonprop={false}
                  buttonnameprop={'Explore'}
                ></ButtonUI>
              </div>
              <div className={styles['serviceCardContainer-border']}></div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(ServicesComponent);
