import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './PortfolioComponent.module.scss';
import { Button as ButtonUI } from '../../commonui';

// Images import
import ArtgalleryImg from '../../images/mainscreenImages/portfolio/artgallery.png';
import ResumebuilderImg from '../../images/mainscreenImages/portfolio/resumebuilder.png';
import MygymImg from '../../images/mainscreenImages/portfolio/mygym.png';

interface IPortfolioComponentProps {
  classname?: string;
}

const PortfolioComponent: FunctionComponent<IPortfolioComponentProps> = () => {
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
      <div className={styles['PortfolioContainer']}>
        <div className={styles['portfolioCard-cont']}>
          <Row className='gx-0'>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['portfolioCard1-Col']}>
              <div className={styles['portfolio-image-card']}>
                <div className={styles['portfolio-image-cont']}>
                  <img src={ArtgalleryImg} alt='Cardimage'></img>
                </div>

                <div className={`${styles['card-overlay-content']} ${styles['card-overlay']}`}>
                  <h3 className={styles['portfolio-card-txt']}>Karanth Art Gallery</h3>
                  <ButtonUI
                    varientprop={'danger'}
                    classnameprop={styles['button-visit']}
                    styleprop={{ padding: '0px' }}
                    click={handleportfolioartClick}
                    disableButtonprop={false}
                    buttonnameprop={'visit'}
                  ></ButtonUI>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['portfolioCard2-Col']}>
              <div className={styles['portfolio-image-card']}>
                <div className={styles['portfolio-image-cont']}>
                  <img src={ResumebuilderImg} alt='Cardimage'></img>
                </div>
                <div className={`${styles['card-overlay-content']} ${styles['card-overlay']}`}>
                  <h3 className={styles['portfolio-card-txt']}>Karanth Resume Builder</h3>
                  <ButtonUI
                    varientprop={'danger'}
                    classnameprop={styles['button-visit']}
                    styleprop={{ padding: '0px' }}
                    click={handleportfolioresumeClick}
                    disableButtonprop={false}
                    buttonnameprop={'visit'}
                  ></ButtonUI>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4} className={styles['portfolioCard3-Col']}>
              <div className={styles['portfolio-image-card']}>
                <div className={styles['portfolio-image-cont']}>
                  <img src={MygymImg} alt='Cardimage'></img>
                </div>
                <div className={`${styles['card-overlay-content']} ${styles['card-overlay']}`}>
                  <h3 className={styles['portfolio-card-txt']}>My Gym Fitness</h3>
                  <ButtonUI
                    varientprop={'danger'}
                    classnameprop={styles['button-visit']}
                    styleprop={{ padding: '0px' }}
                    click={handleportfoliomygymClick}
                    disableButtonprop={false}
                    buttonnameprop={'visit'}
                  ></ButtonUI>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(PortfolioComponent);
