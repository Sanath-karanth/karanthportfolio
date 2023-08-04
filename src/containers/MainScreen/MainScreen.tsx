import React, { Fragment, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faUser, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import Zoom from '@mui/material/Zoom';
import styles from './MainScreen.module.scss';
import './MainScreen.css';
import { Header } from '../../commonui';

// Components import
import ServicesComponent from '../../components/ServicesComponent/ServicesComponent';
import PortfolioComponent from '../../components/PortfolioComponent/PortfolioComponent';
import ContactComponent from '../../components/ContactComponent/ContactComponent';
import AboutComponent from '../../components/AboutComponent/AboutComponent';

// Image imports
import bannerImg from '../../images/profile/Sanath2.jpg';
import parallaxBackground1 from '../../images/banner/slider2.jpg';
import parallaxBackground2 from '../../images/banner/banner01.jpg';

interface IMainScreenProps {
  classname?: string;
}

interface IScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const MainScreen: FunctionComponent<IMainScreenProps> = ({ ...props }) => {
  const navigate = useNavigate();
  const [viewprofileShow, setViewprofileShow] = useState<boolean>(true);

  const profileClick = useCallback(() => {
    const profileIconDivElement: HTMLElement | null = document.querySelector(
      `.${styles['banner-profile-icon']}`,
    );
    console.log('profileIconDivElement --->', profileIconDivElement);
    if (window.innerWidth < 767) {
      profileIconDivElement && (profileIconDivElement.style.transform = 'translateX(4.5rem)');
    } else if (window.innerWidth > 767 && window.innerWidth < 1023) {
      profileIconDivElement && (profileIconDivElement.style.transform = 'translateX(6rem)');
    } else if (window.innerWidth > 1024) {
      profileIconDivElement && (profileIconDivElement.style.transform = 'translateX(7rem)');
    }
    setViewprofileShow(false);
    let timer: any = null;
    timer = window.setTimeout(() => {
      navigate('/profile', { replace: false });
    }, 2000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [viewprofileShow, navigate]);

  // Scroll to top function
  function ScrollTop(props: IScrollProps) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const scrollHandleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        '#backtoTop-anchor',
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={scrollHandleClick}
          role='presentation'
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const section = document.querySelectorAll('section');
    const menu = document.querySelectorAll('header nav a');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }

    window.onscroll = () => {
      section.forEach((i) => {
        const top = window.scrollY;
        const offset = i.offsetTop - 150;
        const height = i.offsetHeight;
        const id = i.getAttribute('id');

        if (top >= offset && top < offset + height) {
          menu.forEach((link) => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
          });
        }
      });
    };
  }

  // To check the scroll position on page load
  window.addEventListener('scroll', reveal);
  reveal();

  return (
    <Fragment>
      <div className={styles['MainContainer-main']}>
        <div className={styles['banner-cont']}>
          <section id='home'>
            <div className={styles['header-cont']}>
              <Header />
            </div>
            <div id='backtoTop-anchor'></div>
            <div className='container-fluid gx-0'>
              <Row className='gx-0'>
                <Col xs={6} md={6} lg={6} xl={6} className={styles['banner-left-Col']}>
                  <div className={styles['banner-left-cont']}>
                    <div className={styles['banner-left-txt-cont']}>
                      <div className='mb-2'>
                        <h1 className={styles['banner-title-txt']}>
                          <strong>
                            Hi<span>&#44;</span>
                          </strong>{' '}
                          <b>
                            I’m{' '}
                            <span className={styles['banner-name-txt']}>
                              <span>Sanath</span>
                            </span>
                          </b>
                        </h1>
                      </div>
                      <div>
                        <h4 className={styles['banner-subtitle-txt']}>Web Designer & Developer</h4>
                      </div>
                      <div className={styles['banner-desp-cont']}>
                        <p className={styles['banner-desp-txt']}>
                          with knowledge in web design and development, I offer the best projects
                          resulting in quality work.
                        </p>
                      </div>
                      <div className={styles['banner-profile-icon-cont']} onClick={profileClick}>
                        <div className={styles['banner-profile-icon']}>
                          <FontAwesomeIcon
                            icon={faUser}
                            size='lg'
                            className={styles['profile-icon']}
                          />
                        </div>
                        <div className={styles['banner-profile-outer-cont']}>
                          {viewprofileShow ? (
                            <div className={styles['banner-profile-txt']}>View Profile</div>
                          ) : (
                            <div className={styles['banner-profile-txt']}></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6} className={styles['banner-right-Col']}>
                  <div className={styles['banner-right-cont']}>
                    <div
                      className={styles['banner-img']}
                      style={{ backgroundImage: `url(${bannerImg})` }}
                    >
                      <div className={styles['banner-clip']}></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
        <section id='services' className='ServiceSection'>
          <div className='container-fluid unreveal mt-3'>
            <div>
              <ServicesComponent />
            </div>
          </div>
        </section>

        <section id='portfolio' className='PortfolioSection'>
          <div className='container-fluid reveal mt-3 mb-4'>
            <div>
              <PortfolioComponent />
            </div>
          </div>
        </section>

        {/* Parallax code */}
        <div className='container-fluid unreveal'>
          <div
            className={styles['parallax-center']}
            style={{
              backgroundImage: `url(${parallaxBackground1})`,
            }}
          >
            <div style={{ background: '#ffffff' }}>
              <h1>Services</h1>
            </div>
          </div>
          <div style={{ height: '400px', background: 'red' }}>
            <p>
              Scroll Up and Down this page to see the parallax scrolling effect. This div is just
              here to enable scrolling. Tip: Try to remove the background-attachment property to
              remove the scrolling effect.
            </p>
          </div>
          <div
            className={styles['parallax']}
            style={{
              backgroundImage: `url(${parallaxBackground2})`,
            }}
          ></div>
        </div>

        <section id='contact' className='ContactSection'>
          <div className='container-fluid reveal mt-3'>
            <div>
              <ContactComponent />
            </div>
          </div>
        </section>

        <section id='about' className='AboutSection'>
          <div className='container-fluid reveal mt-3'>
            <div>
              <AboutComponent />
            </div>
            {/* <div className='text-container'>
              <div className='text-box'>
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae
                  perferendis eos provident vitae iste. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quam blanditiis, officiis, voluptate quisquam aperiam nobis est,
                  quis neque esse soluta dolores iste sit corrupti! Magnam, delectus qui. Odit,
                  accusamus doloremque.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, eaque
                  voluptatibus. Eaque tempore quam nesciunt. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eum adipisci blanditiis assumenda atque officiis? Vel, fuga
                  facilis quia reprehenderit nihil optio harum. Quo sapiente veniam atque corporis
                  tempora non repellat?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, eaque
                  voluptatibus. Eaque tempore quam nesciunt. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eum adipisci blanditiis assumenda atque officiis? Vel, fuga
                  facilis quia reprehenderit nihil optio harum. Quo sapiente veniam atque corporis
                  tempora non repellat?
                </p>
              </div>
            </div> */}
          </div>
        </section>
        <ScrollTop {...props}>
          <Fab color='error' size='medium' aria-label='scroll back to top'>
            <ArrowUpwardTwoToneIcon />
          </Fab>
        </ScrollTop>
      </div>
    </Fragment>
  );
};

export default React.memo(MainScreen);
