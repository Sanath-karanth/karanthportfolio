import React, { Fragment, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import styles from './AboutComponent.module.scss';
import './AboutComponent.css';
import { Button as ButtonUI } from '../../commonui';

// Images import
import AboutSanathImg from '../../images/profile/SanathIMG20.jpg';

interface IPortfolioComponentProps {
  classname?: string;
}

const PortfolioComponent: FunctionComponent<IPortfolioComponentProps> = () => {
  const [skillTab, setSkillTab] = useState<boolean>(true);
  const [experienceTab, setExperienceTab] = useState<boolean>(false);
  const [educationTab, setEducationTab] = useState<boolean>(false);

  const skillClick = () => {
    setSkillTab(true);
    setExperienceTab(false);
    setEducationTab(false);
  };

  const experienceClick = () => {
    setSkillTab(false);
    setExperienceTab(true);
    setEducationTab(false);
  };

  const educationClick = () => {
    setSkillTab(false);
    setExperienceTab(false);
    setEducationTab(true);
  };

  // const tabsAction = useCallback(() => {
  //   const getFresherColor: HTMLElement | null = document.querySelector(
  //     `.${styles['about-skilltxt']}`,
  //   );
  //   const getExpColor: HTMLElement | null = document.querySelector(`.${styles['about-exptxt']}`);
  //   const getEduColor: HTMLElement | null = document.querySelector(`.${styles['about-edutxt']}`);
  //   const glider: HTMLElement | null = document.querySelector(`.${styles['tabglider']}`);

  //   if (skillTab === true) {
  //     glider && (glider.style.transform = 'translateX(0%)');
  //     getFresherColor && (getFresherColor.style.color = '#185ee0');
  //   } else {
  //     getFresherColor && (getFresherColor.style.color = 'black');
  //   }

  //   if (experienceTab === true) {
  //     glider && (glider.style.transform = 'translateX(50%)');
  //     getExpColor && (getExpColor.style.color = '#185ee0');
  //   } else {
  //     getExpColor && (getExpColor.style.color = 'black');
  //   }

  //   if (educationTab === true) {
  //     glider && (glider.style.transform = 'translateX(250%)');
  //     getEduColor && (getEduColor.style.color = '#185ee0');
  //   } else {
  //     getEduColor && (getEduColor.style.color = 'black');
  //   }
  // }, [skillTab, experienceTab, educationTab]);

  // useEffect(() => {
  //   tabsAction();
  // }, [tabsAction]);

  const tabsAction = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, tabName: string) => {
    const getTabElement = document.getElementsByClassName('tabContent');
    const getTabLinkElement = document.getElementsByClassName('tablinks');
    const getTabNameElement: HTMLElement | null = document.getElementById(tabName);

    let i: number;
    const tabcontent: any | null = getTabElement;

    for (i = 0; i < tabcontent.length; i++) {
      const tabcontentarray = tabcontent[i] as HTMLElement;
      tabcontentarray.style.display = 'none';
    }
    const tablinks: any | null = getTabLinkElement;
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    getTabNameElement && (getTabNameElement.style.display = 'block');
    event.currentTarget.className += ' active';
  };

  function myFunction() {
    const getDefaultElement = document.getElementById('defaultOpen') as HTMLInputElement | null;
    getDefaultElement && getDefaultElement.click();
  }

  useEffect(() => {
    window.addEventListener('load', myFunction);
    myFunction();
  }, [myFunction]);

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

  const SkillDetails = () => {
    return (
      <Fragment>
        <p>SkillDetails</p>
      </Fragment>
    );
  };
  const ExperienceDetails = () => {
    return (
      <Fragment>
        <p>ExperienceDetails</p>
      </Fragment>
    );
  };
  const EducationDetails = () => {
    return (
      <Fragment>
        <p>EducationDetails</p>
      </Fragment>
    );
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
            <Col xs={1} md={1} lg={1} xl={1} className={styles['aboutCard-empty-Col']}></Col>
            <Col xs={10} md={3} lg={3} xl={3} className={styles['aboutCard-left-Col']}>
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
            <Col xs={10} md={7} lg={7} xl={7} className={styles['aboutCard-right-Col']}>
              <div className={styles['about-details-card']}>
                <div className={styles['about-header-cont']}>
                  <h4 className={styles['about-header-txt']}>About Me</h4>
                </div>
                <div className={styles['about-desp-cont']}>
                  <p className={styles['about-desp-txt']}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, eaque
                    voluptatibus. Eaque tempore quam nesciunt. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Eum adipisci blanditiis assumenda atque officiis?
                    Vel, fuga facilis quia reprehenderit nihil optio harum. Quo sapiente veniam
                    atque corporis tempora non repellat?
                  </p>
                  <p className={styles['about-desp-txt']}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, eaque
                    voluptatibus. Eaque tempore quam nesciunt. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Eum adipisci blanditiis assumenda atque officiis?
                    Vel, fuga facilis quia reprehenderit nihil optio harum. Quo sapiente veniam
                    atque corporis tempora non repellat?
                  </p>
                </div>
                <div className='about-tab-cont'>
                  <span
                    className='tablinks'
                    id='defaultOpen'
                    onClick={(event) => tabsAction(event, 'skill')}
                  >
                    <h4 className={styles['about-tab-header-txt']}>Skills</h4>
                  </span>
                  <span className='tablinks' onClick={(event) => tabsAction(event, 'experience')}>
                    <h4 className={styles['about-tab-header-txt']}>Experience</h4>
                  </span>
                  <span className='tablinks' onClick={(event) => tabsAction(event, 'education')}>
                    <h4 className={styles['about-tab-header-txt']}>Education</h4>
                  </span>
                </div>
                <div className={styles['about-tab-display-cont']}>
                  <div id='skill' className='tabContent'>
                    <SkillDetails />
                  </div>
                  <div id='experience' className='tabContent'>
                    <ExperienceDetails />
                  </div>
                  <div id='education' className='tabContent'>
                    <EducationDetails />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={1} md={1} lg={1} xl={1} className={styles['aboutCard-mobile-Col']}></Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(PortfolioComponent);
