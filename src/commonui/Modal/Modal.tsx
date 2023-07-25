import React, { FunctionComponent, Fragment } from 'react';
import { Modal as ModalUI } from 'react-bootstrap';
import styles from './Modal.module.scss';

interface ICommonModalProps {
  children?: any;
  showprop?: boolean;
  onHideprop: () => void;
  styleprop?: any;
  sizeprop?: any;
  alignprop?: boolean;
}

const CommonModal: FunctionComponent<ICommonModalProps> = ({
  children,
  showprop,
  onHideprop,
  sizeprop,
  alignprop,
}) => {
  return (
    <Fragment>
      <div data-testid='CommonModal-item'>
        <ModalUI show={showprop} onHide={onHideprop} size={sizeprop} centered={alignprop}>
          {children}
        </ModalUI>
      </div>
    </Fragment>
  );
};

export default React.memo(CommonModal);
