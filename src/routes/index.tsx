import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const loadStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const NotFound: FunctionComponent = () => (
  <Fragment>
    <div style={loadStyles}>
      <h2> Not Found!!</h2>
    </div>
  </Fragment>
);
const Loading: FunctionComponent = () => (
  <Fragment>
    <div style={loadStyles}>
      <h2>Loading...</h2>
    </div>
  </Fragment>
);

////  Actual Screens
const SplashScreenComponent = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => import('../containers/SplashScreen/SplashScreen'),
  );
});
const MainScreenComponent = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 400)).then(
    () => import('../containers/MainScreen/MainScreen'),
  );
});
const ProfileScreenComponent = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 400)).then(
    () => import('../containers/ProfileScreen/ProfileScreen'),
  );
});
const ReviewScreenComponent = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 400)).then(
    () => import('../containers/ReviewScreen/ReviewScreen'),
  );
});

const Routers: FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <Suspense fallback={<Loading />}>
          <BrowserRouter basename='/'>
            <Routes>
              <Route path='/reviews' element={<ReviewScreenComponent />} />
              <Route path='/profile' element={<ProfileScreenComponent />} />
              <Route path='/mainpage' element={<MainScreenComponent />} />
              <Route path='/' element={<SplashScreenComponent />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default React.memo(Routers);
