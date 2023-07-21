import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styles from '../App.module.scss';

const NotFound: FunctionComponent = () => <Fragment>Not Found!!</Fragment>;
const Loading: FunctionComponent = () => <Fragment>Loading...</Fragment>;

////  Actual Screens
const SplashScreenComponent = lazy(() => import('../containers/SplashScreen/SplashScreen'));
const MainScreenComponent = lazy(() => import('../containers/MainScreen/MainScreen'));
const ProfileScreenComponent = lazy(() => import('../containers/ProfileScreen/ProfileScreen'));

const Routers: FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <Suspense fallback={<Loading />}>
          <BrowserRouter basename='/'>
            <Routes>
              {/* <Route
                path='/design-technician'
                element={
                  <Navigate state={{ user: 'DT' }} replace to='/design-technician/plant-number' />
                }
              />
              <Route path='/design-technician/:route' element={<DesignTechnicianComponent />} />
              <Route path='/admin' element={<AdminComponent />} /> */}
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
