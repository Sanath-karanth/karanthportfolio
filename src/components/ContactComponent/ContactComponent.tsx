/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, FunctionComponent, useState } from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactComponent.module.scss';
import { Button as ButtonUI } from '../../commonui';
import { useAuth } from '../../contexts/AuthContext';

interface IContactComponentProps {
  classname?: string;
}
interface IUserContactFormProps {
  username?: string;
  phoneno?: string;
  emailid?: string;
  message?: string;
}

interface IformfielddataProps {
  uniqueID?: number | null;
  usernameval?: string | null;
  phonenoval?: string | null;
  emailIDval?: string | null;
  messageval?: string | null;
  feedbackdate?: string | undefined;
}

const ContactComponent: FunctionComponent<IContactComponentProps> = ({ ...props }) => {
  const { createdata } = useAuth();
  const feedbackdate: string = moment().format('LLL');
  const [usernameval, setUsernameval] = useState<string>('');
  const [phonenoval, setPhonenoval] = useState<string>('');
  const [emailIDval, setEmailIdval] = useState<string>('');
  const [messageval, setMessageval] = useState<string>('');
  const [alertshowsuccess, setAlertshowsuccess] = useState<boolean>(false);
  const [alertshowfail, setAlertshowfail] = useState<boolean>(false);

  const initialValues: IUserContactFormProps = {
    username: usernameval,
    phoneno: phonenoval,
    emailid: emailIDval,
    message: messageval,
  };

  const validate = (values: IUserContactFormProps) => {
    const errors: IUserContactFormProps = {};

    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (!/^[A-Za-z\b\s]+$/.test(values.username)) {
      errors.username = 'Please enter a Valid username.';
    }
    if (!values.phoneno) {
      errors.phoneno = 'Phone no is required!';
    } else if (!/[6-9]\d{9}$/i.test(values.phoneno)) {
      errors.phoneno = 'Please enter a valid 10-digit phone number.';
    }
    if (!values.emailid) {
      errors.emailid = 'Email ID is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailid)) {
      errors.emailid = 'Please enter a valid Email ID.';
    }
    if (!values.message) {
      errors.message = 'Message/Feedback is required!';
    } else if (!/^[a-zA-Z0-9!@#$%^&*()_+\-={};':"\\|,.<>/?\b\s ]+$/.test(values.message)) {
      errors.message = 'Please enter the valid characters only.';
    }

    return errors;
  };

  let interval: any = null;
  const timeoutfinish = () => {
    clearInterval(interval);
    setAlertshowsuccess(false);
    setAlertshowfail(false);
  };

  const handleSubmit = async (values: IUserContactFormProps) => {
    console.log('Values...', values);
    interval = setTimeout(timeoutfinish, 3000);
    const userstorevalue: string | null = localStorage.getItem('UserName');
    if (userstorevalue === usernameval) {
      console.log('username equal');
      console.log(userstorevalue);
      setAlertshowfail(true);
      setAlertshowsuccess(false);
    } else {
      console.log('username not equal');
      console.log(userstorevalue);
      localStorage.setItem('UserName', usernameval);
      const uniqueID: number = Math.floor(Math.random() * 1000);
      const formfielddata: IformfielddataProps = {
        uniqueID,
        usernameval,
        phonenoval,
        emailIDval,
        messageval,
        feedbackdate,
      };
      try {
        await createdata('feedbackdataPortfolio', formfielddata);
        console.log('Database created...');
        setAlertshowfail(false);
        setAlertshowsuccess(true);
        values.username = '';
        values.phoneno = '';
        values.emailid = '';
        values.message = '';
      } catch (err) {
        console.log(err);
        setAlertshowfail(true);
      }
    }
  };

  return (
    <Fragment>
      <div className={styles['ContactContainer']}>
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

                <div className={styles['contact-info-cont']}>
                  <div className={styles['contact-icon-cont']}>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      size='lg'
                      className={styles['info-icon']}
                    />
                  </div>
                  <div className={styles['contact-txt-cont']}>
                    <h4 className={styles['contact-header-txt']}>EmailID</h4>
                    <p className={styles['contact-desp-txt']}>sanathsk97@gmail.com</p>
                  </div>
                </div>

                <div className={styles['contact-info-cont']}>
                  <div className={styles['contact-icon-cont']}>
                    <FontAwesomeIcon icon={faPhone} size='lg' className={styles['info-icon']} />
                  </div>
                  <div className={styles['contact-txt-cont']}>
                    <h4 className={styles['contact-header-txt']}>PhoneNo</h4>
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
                    <Formik
                      initialValues={initialValues}
                      validate={validate}
                      onSubmit={handleSubmit}
                    >
                      {({ handleChange, handleSubmit, values, errors }) => (
                        <Form>
                          <Row className='gx-0'>
                            <Col xs={12} md={5} lg={5} xl={5}>
                              <Form.Group className='mb-3'>
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
                                  value={values.username}
                                  onChange={(e) => {
                                    handleChange(e);
                                    setUsernameval(e.target.value);
                                  }}
                                />
                                {errors.username ? (
                                  <div className={styles['contact-form-err-txt']}>
                                    {errors.username}
                                  </div>
                                ) : null}
                              </Form.Group>
                            </Col>
                            <Col xs={12} md={1} lg={1} xl={1}></Col>
                            <Col xs={12} md={6} lg={6} xl={6}>
                              <Form.Group className='mb-3'>
                                <Form.Label className={styles['contact-form-label-txt']}>
                                  Phone No
                                </Form.Label>
                                <Form.Control
                                  type='text'
                                  placeholder='Enter your 10-digit phone number'
                                  className={styles['contact-form-txt']}
                                  autoComplete='off'
                                  maxLength={10}
                                  name='phoneno'
                                  value={values.phoneno}
                                  onChange={(e: any) => {
                                    handleChange(e);
                                    setPhonenoval(e.target.value);
                                  }}
                                />
                                {errors.phoneno ? (
                                  <div className={styles['contact-form-err-txt']}>
                                    {errors.phoneno}
                                  </div>
                                ) : null}
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className='mb-3'>
                            <Form.Label className={styles['contact-form-label-txt']}>
                              EmailID
                            </Form.Label>
                            <Form.Control
                              type='text'
                              placeholder='Enter your email id'
                              className={styles['contact-form-txt']}
                              autoComplete='off'
                              name='emailid'
                              value={values.emailid}
                              onChange={(e: any) => {
                                handleChange(e);
                                setEmailIdval(e.target.value);
                              }}
                            />
                            {errors.emailid ? (
                              <div className={styles['contact-form-err-txt']}>{errors.emailid}</div>
                            ) : null}
                          </Form.Group>

                          <Form.Group className='mb-3'>
                            <Form.Label className={styles['contact-form-label-txt']}>
                              Message
                            </Form.Label>
                            <Form.Control
                              as='textarea'
                              rows={4}
                              type='text'
                              placeholder='Enter your valuable feedback message'
                              className={styles['contact-form-txt']}
                              autoComplete='off'
                              name='message'
                              value={values.message}
                              onChange={(e: any) => {
                                handleChange(e);
                                setMessageval(e.target.value);
                              }}
                            />
                            {errors.message ? (
                              <div className={styles['contact-form-err-txt']}>{errors.message}</div>
                            ) : null}
                          </Form.Group>

                          <ButtonUI
                            varientprop={'outline-danger'}
                            classnameprop={styles['button-submit']}
                            styleprop={{ margin: '2rem 0rem 1rem 0rem' }}
                            click={handleSubmit}
                            disableButtonprop={false}
                            buttonnameprop={'Submit'}
                          ></ButtonUI>
                        </Form>
                      )}
                    </Formik>
                    <Alert show={alertshowsuccess} variant='success'>
                      Thanks for your valuable feedback.
                    </Alert>
                    <Alert show={alertshowfail} variant='danger'>
                      You have already submitted your feedback. Thank you!
                    </Alert>
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
