import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { IoChevronBack } from 'react-icons/io5';
import styles from './ReviewScreen.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import { Button as ButtonUI, ModalCommon } from '../../commonui';

interface IReviewScreenProps {
  classname?: string;
}
interface IReviewData {
  dbkey?: string | null;
  uniqueID?: number | null;
  username?: string | undefined;
  phoneno?: string | undefined;
  emailID?: string | undefined;
  message?: string | undefined;
  feedbackdate?: string | undefined;
}
interface IModalDeleteProps {
  showprop?: boolean;
  onHideprop: () => void;
  styleprop?: any;
  backdropprop?: any;
  sizeprop?: any;
  scrollableprop?: boolean;
  alignprop?: boolean;
}

const ReviewScreen: FunctionComponent<IReviewScreenProps> = () => {
  const navigate = useNavigate();
  const { getAlldata, deletedata } = useAuth();
  const [reviewIconshow, setReviewIconshow] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [pathvalue, setPathvalue] = useState<string>('');
  const [idvalue, setIdvalue] = useState<string>('');
  const [carddatavalues, setCarddatavalues] = useState<IReviewData[] | null>([]);

  // functions to close the modal
  const handleCloseDelete = () => setShowDelete(false);

  const backClick = () => {
    // navigate(-1);
    navigate('/mainpage', { replace: false });
  };
  const reviewstoreCheck = () => {
    const userstorevalue: string | null = localStorage.getItem('UserName');
    if (userstorevalue === 'sanathorthotech') {
      setReviewIconshow(true);
    } else {
      setReviewIconshow(false);
    }
  };

  const reviewData = async () => {
    try {
      getAlldata('feedbackdataPortfolio').on('value', (snapshot: any) => {
        if (snapshot.val() != null) {
          const mainarr: IReviewData[] = [];
          snapshot.forEach((item: any) => {
            const dbkey = item.key;
            const data = item.val();
            mainarr.push({
              dbkey: dbkey,
              uniqueID: data?.uniqueID,
              username: data?.usernameval,
              phoneno: data?.phonenoval,
              emailID: data?.emailIDval,
              message: data?.messageval,
              feedbackdate: data?.feedbackdate,
            });
          });

          setCarddatavalues(mainarr);
          console.log('Review array data--->  ', mainarr);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deletepopup = (pathval: any, idval: any) => {
    setShowDelete(true);
    setPathvalue(pathval);
    setIdvalue(idval);
  };

  const deleteClick = async () => {
    setShowDelete(false);
    setCarddatavalues([]);
    deletedata(pathvalue, idvalue)
      .then(() => {
        console.log('Data deleted successfully!');
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  useEffect(() => {
    reviewData();
  }, []);

  useEffect(() => {
    reviewstoreCheck();
  }, [reviewIconshow]);

  const ModalDelete: FunctionComponent<IModalDeleteProps> = (props) => {
    return (
      <Fragment>
        <ModalCommon {...props} aria-labelledby='contained-modal-title-vcenter'>
          <div className={styles['fullScreen-header']}>
            <h1 className={styles['fullScreen-header-txt']}>Are you Sure?</h1>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              size='lg'
              className={styles['close-icon']}
              onClick={handleCloseDelete}
            />
          </div>
          <div className={styles['fullScreen-cont']}>
            <div className={styles['fullScreen-button']}>
              <ButtonUI
                varientprop={'success'}
                classnameprop={styles['button-cancel']}
                click={props.onHideprop}
                disableButtonprop={false}
                buttonnameprop={'Close'}
              ></ButtonUI>
            </div>
            <div className={styles['fullScreen-button']}>
              <ButtonUI
                varientprop={'danger'}
                classnameprop={styles['button-submit']}
                click={deleteClick}
                disableButtonprop={false}
                buttonnameprop={'OK'}
              ></ButtonUI>
            </div>
          </div>
        </ModalCommon>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <ModalDelete
        showprop={showDelete}
        onHideprop={() => setShowDelete(false)}
        sizeprop={'sm'}
        scrollableprop={true}
        alignprop={true}
      />
      <div className={styles['ReviewContainer-cont']}>
        <div className={styles['review-main-cont']}>
          <Row className={`${'gx-0'} ${styles['review-main-Row']}`}>
            <Col xs={12} md={2} lg={2} xl={2}>
              <div className={styles['review-back-icon-bg']} onClick={backClick}>
                <IoChevronBack className={styles['back-icon']} />
                <span className={styles['review-back-txt']}>Home</span>
              </div>
            </Col>
            <Col xs={12} md={10} lg={10} xl={10}>
              <div className={styles['review-card-cont']}>
                <span className={styles['review-txt']}>Reviews</span>
                <div className={styles['review-border-line-full']}></div>
                <div className={styles['review-cards-cont']}>
                  {carddatavalues?.length === 0 ? (
                    <div>
                      <p>No Data!</p>
                    </div>
                  ) : (
                    <>
                      {carddatavalues
                        // ?.sort((a: any, b: any) => (a.dbkey < b.dbkey ? 1 : -1))
                        ?.sort((a: any, b: any) => {
                          const usera = a.username.toLowerCase(),
                            userb = b.username.toLowerCase();

                          if (usera < userb) {
                            return -1;
                          }
                          if (usera > userb) {
                            return 1;
                          }
                          return 0;
                        })
                        .map((item: IReviewData) => {
                          return (
                            <div key={item.uniqueID} className={styles['review-cards']}>
                              <div className={styles['review-name-txt']}>{item.username}</div>
                              <div className={styles['review-desp-txt']}>{item.phoneno}</div>
                              <div className={styles['review-desp-txt']}>{item.emailID}</div>
                              <div className={styles['review-desp-txt']}>{item.feedbackdate}</div>
                              <div className={styles['review-desp-msg-txt']}>
                                <b style={{ color: '#808080' }}>Feedback:</b>
                                <p>{item.message}</p>
                              </div>
                              <ButtonUI
                                varientprop={'outline-danger'}
                                classnameprop={styles['button-submit']}
                                styleprop={{ marginTop: '1rem' }}
                                click={() => deletepopup('feedbackdataPortfolio', item.dbkey)}
                                disableButtonprop={false}
                                buttonnameprop={'Delete'}
                              ></ButtonUI>
                            </div>
                          );
                        })}
                    </>
                  )}
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
