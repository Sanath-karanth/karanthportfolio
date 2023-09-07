import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { RiFeedbackFill } from 'react-icons/ri';
import { IoChevronBack } from 'react-icons/io5';
import styles from './ReviewScreen.module.scss';
import bannerImg from '../../images/banner/banner01.jpg';
import AboutSanathImg from '../../images/profile/SanathIMG30.jpg';

interface IReviewScreenProps {
  classname?: string;
}

const ReviewScreen: FunctionComponent<IReviewScreenProps> = () => {
  const navigate = useNavigate();
  const [reviewIconshow, setReviewIconshow] = useState<boolean>(false);
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

  const backClick = () => {
    navigate(-1);
  };
  const reviewstoreCheck = () => {
    const userstorevalue: string | null = localStorage.getItem('UserName');
    console.log('userstorevalue', userstorevalue);
    if (userstorevalue === 'sanathorthotech') {
      setReviewIconshow(true);
    } else {
      setReviewIconshow(false);
    }
  };

  useEffect(() => {
    reviewstoreCheck();
  }, [reviewIconshow]);

  return (
    <Fragment>
      <div className={styles['ReviewContainer-cont']}>
        <div className={styles['review-main-cont']}>
          <Row className={`${'gx-0'} ${styles['review-main-Row']}`}>
            <Col xs={12} md={2} lg={2} xl={2}>
              <div className={styles['review-back-icon-bg']} onClick={backClick}>
                <IoChevronBack className={styles['back-icon']} />
                <span className={styles['review-back-txt']}>Back</span>
              </div>
            </Col>
            <Col xs={12} md={10} lg={10} xl={10}>
              <div className={styles['review-card-cont']}>
                <span className={styles['review-txt']}>Reviews</span>
                <div className={styles['review-border-line-full']}></div>
                <div className={styles['review-cards-cont']}>
                  <div className={styles['review-cards']}>
                    <div className={styles['review-name-txt']}>Sanath S Karanth</div>
                    <div className={styles['review-desp-txt']}>9449685219</div>
                    <div className={styles['review-desp-txt']}>sanath@gmail.com</div>
                    <div className={styles['review-desp-txt']}>Your Message</div>
                  </div>
                  <div className={styles['review-cards']}>
                    <div className={styles['review-name-txt']}>Santhosh</div>
                    <div className={styles['review-desp-txt']}>9449685219</div>
                    <div className={styles['review-desp-txt']}>sanath@gmail.com</div>
                    <div className={styles['review-desp-txt']}>Your Message</div>
                  </div>
                  <div className={styles['review-cards']}>
                    <div className={styles['review-name-txt']}>Subhash</div>
                    <div className={styles['review-desp-txt']}>9449685219</div>
                    <div className={styles['review-desp-txt']}>sanath@gmail.com</div>
                    <div className={styles['review-desp-txt']}>Your Message</div>
                  </div>
                  <div className={styles['review-cards']}>
                    <div className={styles['review-name-txt']}>Suresh Kumar</div>
                    <div className={styles['review-desp-txt']}>9449685219</div>
                    <div className={styles['review-desp-txt']}>sanath@gmail.com</div>
                    <div className={styles['review-desp-txt']}>Your Message</div>
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

export default React.memo(ReviewScreen);
