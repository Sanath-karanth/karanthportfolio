import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MainScreen.module.scss';

interface IMainScreenProps {
  classname?: string;
}

const MainScreen: FunctionComponent<IMainScreenProps> = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Row className='gx-0'>
        <Col xs={2} md={2} className='menu-Col'>
          <h1>Main Screen</h1>
        </Col>
      </Row>
    </Fragment>
  );
};

export default React.memo(MainScreen);
