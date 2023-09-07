/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, FunctionComponent, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Formik, FormikErrors } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactComponent.module.scss';
import { Button as ButtonUI } from '../../commonui';

interface IContactComponentProps {
  classname?: string;
}
interface IUserContactFormProps {
  username: string;
  phoneno: string;
  emailID: string;
  message: string;
}

interface IformfielddataProps {
  uniqueID: number;
  usernameval: string;
  phonenoval: string;
  emailIDval: string;
  messageval: string;
}

const ContactComponent: FunctionComponent<IContactComponentProps> = ({ ...props }) => {
  const [usernameval, setUsernameval] = useState<string>('');
  const [phonenoval, setPhonenoval] = useState<string>('');
  const [emailIDval, setEmailIDval] = useState<string>('');
  const [messageval, setMessageval] = useState<string>('');
  const [alertshowsuccess, setAlertshowsuccess] = useState<boolean>(false);
  const [alertshowfail, setAlertshowfail] = useState<boolean>(false);
  let interval: any = null;

  const initialValues: IUserContactFormProps = {
    username: usernameval,
    phoneno: phonenoval,
    emailID: emailIDval,
    message: messageval,
  };

  const validate = (values: IUserContactFormProps) => {
    const errors: FormikErrors<IUserContactFormProps> = {};

    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (!/^[A-Za-z\b\s]+$/.test(values.username)) {
      errors.username = 'Please enter a Valid username.';
    }

    return errors;
  };
  const timeoutfinish = () => {
    clearInterval(interval);
    setAlertshowsuccess(false);
    setAlertshowfail(false);
  };

  const handleSubmit = async (values: IUserContactFormProps) => {
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
      };
      try {
        // await createdata('feedbackdata', formfielddata);
        console.log('Database created...');
        setAlertshowfail(false);
        setAlertshowsuccess(true);
        values.username = '';
        values.phoneno = '';
        values.emailID = '';
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
                    <h4 className={styles['contact-header-txt']}>EMail</h4>
                    <p className={styles['contact-desp-txt']}>sanathsk97@gmail.com</p>
                  </div>
                </div>

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
                      {({ handleChange, handleSubmit, values, errors, touched }) => (
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
                                {errors.username && touched.username ? (
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
                                  id='placeholdertext'
                                  name='phoneno'
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className='mb-3'>
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

                          <Form.Group className='mb-3'>
                            <Form.Label className={styles['contact-form-label-txt']}>
                              Message
                            </Form.Label>
                            <Form.Control
                              as='textarea'
                              rows={4}
                              type='text'
                              placeholder='Enter your feedback message'
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
                            click={handleSubmit}
                            disableButtonprop={false}
                            buttonnameprop={'Submit'}
                          ></ButtonUI>
                        </Form>
                      )}
                    </Formik>
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
