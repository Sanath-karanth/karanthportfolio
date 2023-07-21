import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import styles from './ProfileScreen.module.scss';

interface ISplashScreenProps {
  classname?: string;
}
const splashStyle = {
  height: 350,
  width: 350,
};

const SplashScreen: FunctionComponent<ISplashScreenProps> = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={styles['ProfileContainer-splash']}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Profile</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(SplashScreen);
