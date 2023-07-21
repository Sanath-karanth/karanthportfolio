import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MainScreen.module.scss';
import './MainScreen.css';
import { Header } from '../../commonui';
import bannerImg from '../../images/profile/Sanath2.jpg';
import parallaxBackground1 from '../../images/banner/slider1.jpg';
import parallaxBackground2 from '../../images/banner/slide3.jpg';

interface IMainScreenProps {
  classname?: string;
}

const MainScreen: FunctionComponent<IMainScreenProps> = () => {
  const dispatch = useDispatch();

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
            <div className='container-fluid gx-0'>
              <Row className='gx-0'>
                <Col sm='6' md='6' lg='6' className={styles['banner-left-Col']}>
                  <div className={styles['banner-left-cont']}>
                    <div className={styles['banner-left-txt-cont']}>
                      <div>
                        <h1 className={styles['banner-title-txt']}>
                          <strong>
                            Hi<span>&#44;</span>
                          </strong>{' '}
                          <b>I am Sanath</b>
                        </h1>
                      </div>
                      <div>
                        <h4 className={styles['banner-desp-txt']}>Web Designer & Developer</h4>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm='6' md='6' lg='6' className={styles['banner-right-Col']}>
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
        <section id='services'>
          <div className='container-fluid unreveal mt-5'>
            <h2>Services</h2>
            <div
              className={styles['parallax']}
              style={{
                backgroundImage: `url(${parallaxBackground1})`,
              }}
            ></div>
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
            <div className='text-container'>
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
              </div>
            </div>
          </div>
        </section>
        <section id='portfolio'>
          <div className='container-fluid reveal'>
            <h2>Portfolio</h2>
            <div className='text-container'>
              <div className='text-box'>
                <h3>Section text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae
                  perferendis eos provident vitae iste.
                </p>
              </div>
              <div className='text-box'>
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae
                  perferendis eos provident vitae iste.
                </p>
              </div>
              <div className='text-box'>
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae
                  perferendis eos provident vitae iste.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='contact'>
          <div className='container reveal'>
            <h2>Contact</h2>
            <div className='text-container'>
              <div className='text-box'>
                <h3>Section Text</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className='text-box'>
                <h3>Section Text</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>

        <section id='about'>
          <div className='container reveal'>
            <h2>About</h2>
            <div className='text-container'>
              <div className='text-box'>
                <h3>Section Text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae
                  perferendis eos provident vitae iste. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quam blanditiis, officiis, voluptate quisquam aperiam nobis est,
                  quis neque esse soluta dolores iste sit corrupti! Magnam, delectus qui. Odit,
                  accusamus doloremque.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default React.memo(MainScreen);
