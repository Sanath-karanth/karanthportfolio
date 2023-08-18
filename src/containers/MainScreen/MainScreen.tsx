import React, {
  Fragment,
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faUser, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaJsSquare,
  FaStackOverflow,
  FaCss3Alt,
  FaNode,
  FaGithub,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import Zoom from '@mui/material/Zoom';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from './MainScreen.module.scss';
import './MainScreen.css';
import { Header } from '../../commonui';
import Footer from '../../commonui/Footer/Footer';

// Components import
import ServicesComponent from '../../components/ServicesComponent/ServicesComponent';
import PortfolioComponent from '../../components/PortfolioComponent/PortfolioComponent';
import ContactComponent from '../../components/ContactComponent/ContactComponent';
import AboutComponent from '../../components/AboutComponent/AboutComponent';

// Image imports
import bannerImg from '../../images/profile/Sanath2.jpg';
import parallaxBackground1 from '../../images/banner/slider2.jpg';
import parallaxBackground2 from '../../images/banner/banner01.jpg';
import parallaxImg3 from '../../images/parallax/parallaxImg3.jpg';
import parallaxImg4 from '../../images/parallax/parallaxImg4.jpg';

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
  const swiperRef = useRef<SwiperRef>(null);

  const profileClick = useCallback(() => {
    const profileIconDivElement: HTMLElement | null = document.querySelector(
      `.${styles['banner-profile-icon']}`,
    );
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
          <div className='container-fluid custom-gutters'>
            <div className={styles['sectionBar-cont']}>
              <Row className='gx-0'>
                <Col xs={8} md={6} lg={6} xl={8} className={styles['sectionBarRightSide-left-Col']}>
                  <div className={styles['sectionBar-left-cont']}>
                    <div className={styles['sectionBar-txt-background']}>
                      <h1 className={styles['sectionBar-txt']}>Services</h1>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={8}
                  md={6}
                  lg={6}
                  xl={4}
                  className={styles['sectionBarRightSide-right-Col']}
                ></Col>
              </Row>
            </div>
            <div className='unreveal'>
              <ServicesComponent />
            </div>
          </div>
        </section>

        <section id='portfolio' className='PortfolioSection'>
          <div className='container-fluid custom-gutters'>
            <div className={styles['sectionBar-cont']}>
              <Row className='gx-0'>
                <Col
                  xs={8}
                  md={6}
                  lg={6}
                  xl={4}
                  className={styles['sectionBarRightSide-right-Col']}
                ></Col>
                <Col xs={8} md={6} lg={6} xl={8} className={styles['sectionBarRightSide-left-Col']}>
                  <div className={styles['sectionBar-right-cont']}>
                    <div className={styles['sectionBar-txt-background']}>
                      <h1 className={styles['sectionBar-txt']}>Portfolio</h1>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className='reveal animEffectBounce'>
              <PortfolioComponent />
            </div>
          </div>
        </section>

        {/* Parallax code */}
        <section id='parallax' className='ParallaxSection'>
          <div className='container-fluid unreveal mt-3 mb-3'>
            <div
              className={styles['parallax-center']}
              style={{
                backgroundImage: `url(${parallaxImg3})`,
              }}
            >
              <div className={styles['parallax-react-cont']}>
                <span className={styles['parallax-react-txt']}>React</span>
                <span className={styles['parallax-react-desp-txt']}>the State-Of-Art</span>
              </div>
            </div>
            <div className={styles['parallax-main-center-container']}>
              <div className={styles['parallax-center-header']}>
                <h1 className={styles['parallax-center-header-txt']}>Technology Stack</h1>
              </div>
              <div className={styles['parallax-center-container']}>
                <div className={styles['parallax-scroll-container']}>
                  <div className={styles['parallax-scroll-container']}>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaReact className={styles['tech-icon']} />
                      </div>
                    </div>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaHtml5 className={styles['tech-icon']} />
                      </div>
                    </div>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaGithub className={styles['tech-icon']} />
                      </div>
                    </div>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaBootstrap className={styles['tech-icon']} />
                      </div>
                    </div>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaCss3Alt className={styles['tech-icon']} />
                      </div>
                    </div>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaStackOverflow className={styles['tech-icon']} />
                      </div>
                    </div>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaJsSquare className={styles['tech-icon']} />
                      </div>
                    </div>
                    <div className={styles['parallax-scroll-box']}>
                      <div className={styles['parallax-icon-bg']}>
                        <FaNode className={styles['tech-icon']} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={styles['parallax']}
              style={{
                backgroundImage: `url(${parallaxImg3})`,
              }}
            ></div>
          </div>
        </section>

        <section id='about' className='AboutSection'>
          <div className='container-fluid custom-gutters'>
            <div className={styles['sectionBar-cont']}>
              <Row className='gx-0'>
                <Col xs={8} md={6} lg={6} xl={8} className={styles['sectionBarRightSide-left-Col']}>
                  <div className={styles['sectionBar-left-cont']}>
                    <div className={styles['sectionBar-txt-background']}>
                      <h1 className={styles['sectionBar-txt']}>About</h1>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={8}
                  md={6}
                  lg={6}
                  xl={4}
                  className={styles['sectionBarRightSide-right-Col']}
                ></Col>
              </Row>
            </div>
            <div className='reveal animEffectFadeInDown'>
              <AboutComponent />
            </div>
          </div>
        </section>

        <section id='contact' className='ContactSection'>
          <div className='container-fluid custom-gutters'>
            <div className={styles['sectionBar-cont']}>
              <Row className='gx-0'>
                <Col
                  xs={8}
                  md={6}
                  lg={6}
                  xl={4}
                  className={styles['sectionBarRightSide-right-Col']}
                ></Col>
                <Col xs={8} md={6} lg={6} xl={8} className={styles['sectionBarRightSide-left-Col']}>
                  <div className={styles['sectionBar-right-cont']}>
                    <div className={styles['sectionBar-txt-background']}>
                      <h1 className={styles['sectionBar-txt']}>Contact</h1>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className='reveal animEffectMove'>
              <ContactComponent />
            </div>
          </div>
        </section>

        <section id='footer' className='FooterSection'>
          <div className='container-fluid unreveal'>
            <div>
              <Footer />
            </div>
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
