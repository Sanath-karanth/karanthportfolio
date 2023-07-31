import React, { Fragment, FunctionComponent, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './PortfolioComponent.module.scss';
import { Button as ButtonUI, ModalCommon } from '../../commonui';

// Images import
import ArtgalleryImg from '../../images/mainscreenImages/portfolio/artgallery.png';
import ResumebuilderImg from '../../images/mainscreenImages/portfolio/resumebuilder.png';
import MygymImg from '../../images/mainscreenImages/portfolio/mygym.png';
import UIUXImg from '../../images/mainscreenImages/services/UIUXImg.jpg';
import webdesignImg from '../../images/mainscreenImages/services/webdesignImg.png';
import webdevImg from '../../images/mainscreenImages/services/webdevImg.png';
import myworkservice1Img from '../../images/mainscreenImages/services/myworkservice1.png';
import myworkservice2Img from '../../images/mainscreenImages/services/myworkservice2.png';

interface IPortfolioComponentProps {
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

const PortfolioComponent: FunctionComponent<IPortfolioComponentProps> = () => {
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
                      src={myworkservice1Img}
                      alt='image'
                    ></img>
                  </div>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <div className={styles['fullScreen-img-cont']}>
                    <img
                      className={styles['fullScreen-mywork-img']}
                      src={myworkservice2Img}
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
      <div className={styles['PortfolioContainer']}>
        <div className={styles['portfolio-Title-cont']}>
          <Row className='gx-0'>
            <Col xs={8} md={6} lg={6} xl={4} className={styles['portfolio-left-Col']}></Col>
            <Col xs={8} md={6} lg={6} xl={8} className={styles['portfolio-right-Col']}>
              <div className={styles['portfolio-left-cont']}>
                <div className={styles['portfolio-txt-border']} id='portfolio-txt-cont'>
                  <h1 className={styles['portfolio-txt']}>Portfolios</h1>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles['portfolioCard-cont']}>
          <Row className='gx-0'>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['portfolioCard1-Col']}>
              <div className={styles['portfolio-image-card']}>
                <div className={styles['portfolio-image-cont']}>
                  <img src={ArtgalleryImg} alt='Cardimage'></img>
                </div>

                <div className={`${styles['card-overlay-content']} ${styles['card-overlay']}`}>
                  <h3 className={styles['portfolio-card-txt']}>Karanth Art Gallery</h3>
                  <ButtonUI
                    varientprop={'danger'}
                    classnameprop={styles['button-visit']}
                    styleprop={{ padding: '0px' }}
                    click={handleShowWebDesign}
                    disableButtonprop={false}
                    buttonnameprop={'Visit'}
                  ></ButtonUI>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['portfolioCard2-Col']}>
              <div className={styles['portfolio-image-card']}>
                <div className={styles['portfolio-image-cont']}>
                  <img src={ResumebuilderImg} alt='Cardimage'></img>
                </div>
                <div className={`${styles['card-overlay-content']} ${styles['card-overlay']}`}>
                  <h3 className={styles['portfolio-card-txt']}>Karanth Resume Builder</h3>
                  <ButtonUI
                    varientprop={'danger'}
                    classnameprop={styles['button-visit']}
                    styleprop={{ padding: '0px' }}
                    click={handleShowWebDesign}
                    disableButtonprop={false}
                    buttonnameprop={'Visit'}
                  ></ButtonUI>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['portfolioCard3-Col']}>
              <div className={styles['portfolio-image-card']}>
                <div className={styles['portfolio-image-cont']}>
                  <img src={MygymImg} alt='Cardimage'></img>
                </div>
                <div className={`${styles['card-overlay-content']} ${styles['card-overlay']}`}>
                  <h3 className={styles['portfolio-card-txt']}>My Gym Fitness</h3>
                  <ButtonUI
                    varientprop={'danger'}
                    classnameprop={styles['button-visit']}
                    styleprop={{ padding: '0px' }}
                    click={handleShowWebDesign}
                    disableButtonprop={false}
                    buttonnameprop={'Visit'}
                  ></ButtonUI>
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
