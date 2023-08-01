/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GoogleMap, Marker } from 'react-google-maps';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactComponent.module.scss';
import { Button as ButtonUI } from '../../commonui';

// Images import
import ArtgalleryImg from '../../images/mainscreenImages/portfolio/artgallery.png';
import ResumebuilderImg from '../../images/mainscreenImages/portfolio/resumebuilder.png';
import MygymImg from '../../images/mainscreenImages/portfolio/mygym.png';

interface IContactComponentProps {
  classname?: string;
}

const ContactComponent: FunctionComponent<IContactComponentProps> = () => {
  // functions for navigate to my websites
  const handleportfolioartClick = () => {
    const url = 'https://karantharts.netlify.app';
    window.open(url, '_blank');
  };
  const handleportfolioresumeClick = () => {
    const url = 'https://karanthresumebuilder.netlify.app';
    window.open(url, '_blank');
  };
  const handleportfoliomygymClick = () => {
    const url = 'https://mygymfitness.netlify.app';
    window.open(url, '_blank');
  };

  return (
    <Fragment>
      <div className={styles['ContactContainer']}>
        <div className={styles['contact-Title-cont']}>
          <Row className='gx-0'>
            <Col xs={8} md={6} lg={6} xl={8} className={styles['contact-right-Col']}>
              <div className={styles['contact-left-cont']}>
                <div className={styles['contact-txt-background']} id='contact-txt-cont'>
                  <h1 className={styles['contact-txt']}>Contact</h1>
                </div>
              </div>
            </Col>
            <Col xs={8} md={6} lg={6} xl={4} className={styles['contact-left-Col']}></Col>
          </Row>
        </div>
        <div className={styles['contactCard-cont']}>
          <Row className={`${'gx-0'} ${styles['contact-main-Row']}`}>
            <Col xs={12} md={5} lg={5} xl={5} className={styles['contactcard-left-Col']}>
              <div className={styles['contact-info-card']}>
                <div className={styles['contact-info-cont']}>
                  <div className={styles['contact-icon-cont']}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size='lg'
                      className={styles['info-icon']}
                    />
                  </div>
                  <div className={styles['contact-txt-cont']}>
                    <h4 className={styles['contact-header-txt']}>Location</h4>
                    <p className={styles['contact-desp-txt']}>Shivamogga, Karnataka, IN</p>
                    <p className={styles['contact-desp-txt']}>577204</p>
                  </div>
                </div>
                {/* <div className={styles['contact-border-line']}></div> */}
                <div className={styles['contact-info-cont']}>
                  <div className={styles['contact-icon-cont']}>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      size='lg'
                      className={styles['info-icon']}
                    />
                  </div>
                  <div className={styles['contact-txt-cont']}>
                    <h4 className={styles['contact-header-txt']}>EMail</h4>
                    <p className={styles['contact-desp-txt']}>sanathsk97@gmail.com</p>
                  </div>
                </div>
                {/* <div className={styles['contact-border-line']}></div> */}
                <div className={styles['contact-info-cont']}>
                  <div className={styles['contact-icon-cont']}>
                    <FontAwesomeIcon icon={faPhone} size='lg' className={styles['info-icon']} />
                  </div>
                  <div className={styles['contact-txt-cont']}>
                    <h4 className={styles['contact-header-txt']}>Phone</h4>
                    <p className={styles['contact-desp-txt']}>+91 9449685219</p>
                  </div>
                </div>
                <div className={styles['contact-border-line']}></div>
                <div className={styles['contact-map-cont']}>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.0800676103717!2d75.5450567824406!3d13.939526218919912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba8b481d062fd%3A0x65160ff564158c45!2s215%2C%20Tank%20Mohalla%2C%20Shivamogga%2C%20Karnataka%20577205!5e0!3m2!1sen!2sin!4v1690899766386!5m2!1sen!2sin'
                    aria-hidden='false'
                    id={styles['map-iframe']}
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7} lg={7} xl={7} className={styles['contactcard-right-Col']}>
              <div className={styles['contact-form-card']}>
                <div className={styles['contact-form-cont']}>
                  <div className={styles['contact-form-header-cont']}>
                    <h4 className={styles['contact-form-header-txt']}>Let's Get In Touch!</h4>
                  </div>
                  <div>
                    <Form>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Full name'
                          autoComplete='off'
                          id='placeholdertext'
                          name='username'
                        />
                        <Form.Text className='text-muted'>
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Enter Email'
                          autoComplete='off'
                          id='placeholdertext'
                          name='email'
                        />
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Phone number'
                          autoComplete='off'
                          id='placeholdertext'
                          name='phone'
                        />
                      </Form.Group>
                      <ButtonUI
                        varientprop={'outline-danger'}
                        classnameprop={styles['button-submit']}
                        styleprop={{ padding: '0px' }}
                        click={() => console.log('clicked')}
                        disableButtonprop={false}
                        buttonnameprop={'Submit'}
                      ></ButtonUI>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(ContactComponent);
