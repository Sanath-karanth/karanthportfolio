import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import styles from './SplashScreen.module.scss';
import animation from '../../lotties/animation_web1.json';

interface ISplashScreenProps {
  classname?: string;
}
const splashStyle = {
  height: 350,
  width: 350,
};

const SplashScreen: FunctionComponent<ISplashScreenProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setInterval(() => {
      navigate('/mainpage', { replace: false });
    }, 2500);
    return () => {
      window.clearInterval(timer);
    };
  }, [navigate]);

  return (
    <Fragment>
      <div className={styles['MainContainer-splash']}>
        <div className={styles['AppLottie-cont']}>
          <Lottie style={splashStyle} animationData={animation} />
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(SplashScreen);
