import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styles from '../App.module.scss';

const NotFound: FunctionComponent = () => <Fragment>Not Found!!</Fragment>;
const Loading: FunctionComponent = () => <Fragment>Loading...</Fragment>;

const MainScreenComponent = lazy(() => import('../containers/MainScreen/MainScreen'));

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
              <Route path='/' element={<MainScreenComponent />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default Routers;
