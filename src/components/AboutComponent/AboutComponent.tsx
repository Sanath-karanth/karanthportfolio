import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import moment from 'moment';
import { FaInstagram, FaFacebookF, FaLinkedin, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import styles from './AboutComponent.module.scss';
import './AboutComponent.css';

// Images import
import AboutSanathImg from '../../images/profile/SanathIMG20.jpg';

interface IAboutComponentProps {
  classname?: string;
}

const AboutComponent: FunctionComponent<IAboutComponentProps> = () => {
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
    const skillData = [
      {
        skilID: 10,
        skillName: 'Html',
        percentage: '100',
      },
      {
        skilID: 11,
        skillName: 'CSS',
        percentage: '90',
      },
      {
        skilID: 12,
        skillName: 'Bootstrap',
        percentage: '70',
      },
      {
        skilID: 13,
        skillName: 'JavaScript',
        percentage: '40',
      },
      {
        skilID: 14,
        skillName: 'TypeScript',
        percentage: '40',
      },
      {
        skilID: 15,
        skillName: 'ReactJS',
        percentage: '50',
      },
    ];
    return (
      <Fragment>
        <div className={styles['SkillTabContainer']}>
          {skillData.map((item: any) => {
            return (
              <div key={item.skilID} className={styles['Skill-Col-cont']}>
                <div className={styles['Skill-text-cont']}>
                  <span className={styles['Skill-txt']}>{item.skillName}</span>
                  <span className={styles['Skill-percent-txt']}>{item.percentage}%</span>
                </div>
                <ProgressBar now={item.percentage} variant='warning' />
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  };
  const ExperienceDetails = () => {
    return (
      <Fragment>
        <div className={styles['ExperienceTabContainer-main']}>
          <div className={styles['ExperienceTabContainer']}>
            <div className={styles['about-timeline-cont']}>
              <div className={styles['about-timeline-outer-img']}>
                <div className={styles['about-timeline-inner-img']}>
                  <FaBriefcase className={styles['timeline-icon']} onClick={handleFacebookClick} />
                </div>
              </div>
              <div className={styles['about-vertical-line']}></div>
            </div>
            <div className={styles['about-horizontal-line']}></div>
            <div className={styles['about-timeline-box']}>
              <h4 className={styles['about-timeline-header-txt']}>Tata Consultancy Services</h4>
              <p className={styles['about-timeline-desp-txt']}>Systems Engineer</p>
              <hr className={styles['about-timeline-hr']}></hr>
              <p className={styles['about-timeline-footer-txt']}>
                {moment('Oct 11 2021').format('LL')} - Present
              </p>
            </div>
          </div>
          <div className={styles['ExperienceTabContainer']}>
            <div className={styles['about-timeline-cont']}>
              <div className={styles['about-timeline-outer-img']}>
                <div className={styles['about-timeline-inner-img']}>
                  <FaBriefcase className={styles['timeline-icon']} onClick={handleFacebookClick} />
                </div>
              </div>
            </div>
            <div className={styles['about-horizontal-line']}></div>
            <div className={styles['about-timeline-box']}>
              <h4 className={styles['about-timeline-header-txt']}>
                SYNERGY Strategic Solutions Pvt Ltd
              </h4>
              <p className={styles['about-timeline-desp-txt']}>Associate Software Engineer</p>
              <hr className={styles['about-timeline-hr']}></hr>
              <p className={styles['about-timeline-footer-txt']}>
                {moment('Jul 01 2019').format('LL')} - {moment('Sep 30 2021').format('LL')}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  const EducationDetails = () => {
    return (
      <Fragment>
        <div className={styles['EducationTabContainer-main']}>
          <div className={styles['EducationTabContainer']}>
            <div className={styles['about-timeline-cont']}>
              <div className={styles['about-timeline-outer-img']}>
                <div className={styles['about-timeline-inner-img']}>
                  <FaGraduationCap
                    className={styles['timeline-icon']}
                    onClick={handleFacebookClick}
                  />
                </div>
              </div>
            </div>
            <div className={styles['about-horizontal-line']}></div>
            <div className={styles['about-timeline-box']}>
              <h4 className={styles['about-timeline-header-txt']}>PESITM, Shivamogga</h4>
              <p className={styles['about-timeline-desp-txt']}>BE in Computer Science</p>
              <hr className={styles['about-timeline-hr']}></hr>
              <p className={styles['about-timeline-footer-txt']}>
                {moment('June 01 2015').format('LL')} - {moment('June 01 2019').format('LL')}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className={styles['AboutContainer']}>
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

export default React.memo(AboutComponent);
