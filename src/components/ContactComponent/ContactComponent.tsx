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
  return (
    <Fragment>
      <div className={styles['ContactContainer']}>
        {/* <div className={styles['contact-Title-cont']}>
          <Row className='gx-0'>
            <Col xs={8} md={6} lg={6} xl={4} className={styles['contact-left-Col']}></Col>
            <Col xs={8} md={6} lg={6} xl={8} className={styles['contact-right-Col']}>
              <div className={styles['contact-left-cont']}>
                <div className={styles['contact-txt-background']} id='contact-txt-cont'>
                  <h1 className={styles['contact-txt']}>Contact</h1>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
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
                    src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d425.04830647426803!2d75.54522595122187!3d13.939460963989713!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDU2JzIyLjEiTiA3NcKwMzInNDMuNSJF!5e0!3m2!1sen!2sin!4v1691048731997!5m2!1sen!2sin'
                    aria-hidden='false'
                    id={styles['map-iframe']}
                  ></iframe>
                  {/* <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.0800676103717!2d75.5450567824406!3d13.939526218919912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba8b481d062fd%3A0x65160ff564158c45!2s215%2C%20Tank%20Mohalla%2C%20Shivamogga%2C%20Karnataka%20577205!5e0!3m2!1sen!2sin!4v1690899766386!5m2!1sen!2sin'
                    aria-hidden='false'
                    id={styles['map-iframe']}
                  ></iframe> */}
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
                      <Row className='gx-0'>
                        <Col xs={12} md={5} lg={5} xl={5}>
                          <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label className={styles['contact-form-label-txt']}>
                              Name
                            </Form.Label>
                            <Form.Control
                              type='text'
                              placeholder='Enter your full name'
                              className={styles['contact-form-txt']}
                              autoComplete='off'
                              id='placeholdertext'
                              name='username'
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={1} lg={1} xl={1}></Col>
                        <Col xs={12} md={6} lg={6} xl={6}>
                          <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label className={styles['contact-form-label-txt']}>
                              Phone No
                            </Form.Label>
                            <Form.Control
                              type='text'
                              placeholder='Enter your 10-digit phone number'
                              className={styles['contact-form-txt']}
                              autoComplete='off'
                              id='placeholdertext'
                              name='phoneno'
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label className={styles['contact-form-label-txt']}>
                          EmailID
                        </Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Enter your email id'
                          className={styles['contact-form-txt']}
                          autoComplete='off'
                          id='placeholdertext'
                          name='email'
                        />
                      </Form.Group>

                      <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label className={styles['contact-form-label-txt']}>
                          Message
                        </Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={4}
                          type='text'
                          placeholder='Enter your message'
                          className={styles['contact-form-txt']}
                          autoComplete='off'
                          id='placeholdertext'
                          name='text'
                        />
                      </Form.Group>

                      <ButtonUI
                        varientprop={'outline-danger'}
                        classnameprop={styles['button-submit']}
                        styleprop={{ marginTop: '2rem' }}
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
