import React, { FunctionComponent, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';

interface ICommonModalProps {
  children?: any;
  showprop?: boolean;
  onHideprop: () => void;
  styleprop?: any;
  sizeprop?: any;
  scrollableprop?: boolean;
  alignprop?: boolean;
}

const CommonModal: FunctionComponent<ICommonModalProps> = ({
  children,
  showprop,
  onHideprop,
  sizeprop,
  scrollableprop,
  alignprop,
}) => {
  return (
    <Fragment>
      <div data-testid='CommonModal-item'>
        <Modal
          show={showprop}
          onHide={onHideprop}
          size={sizeprop}
          scrollable={scrollableprop}
          centered={alignprop}
        >
          {children}
        </Modal>
      </div>
    </Fragment>
  );
};

export default React.memo(CommonModal);
