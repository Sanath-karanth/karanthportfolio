import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

const NotFound: FunctionComponent = () => <Fragment>Not Found!!</Fragment>;
const Loading: FunctionComponent = () => <Fragment>Loading...</Fragment>;

////  Actual Screens
const SplashScreenComponent = lazy(() => import('../containers/SplashScreen/SplashScreen'));
const MainScreenComponent = lazy(() => import('../containers/MainScreen/MainScreen'));
const ProfileScreenComponent = lazy(() => import('../containers/ProfileScreen/ProfileScreen'));
const ReviewScreenComponent = lazy(() => import('../containers/ReviewScreen/ReviewScreen'));

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

export default Routers;
