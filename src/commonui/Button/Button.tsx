import React, { Fragment, FunctionComponent } from 'react';
import { Button as ButtonMain } from 'react-bootstrap';

interface IButtonProps {
  click: () => void;
  varientprop: any;
  classnameprop: string;
  buttonnameprop?: string;
  styleprop?: any;
  disableButtonprop?: boolean;
}

const Button: FunctionComponent<IButtonProps> = ({
  click,
  varientprop,
  classnameprop,
  buttonnameprop,
  styleprop,
  disableButtonprop,
}) => {
  return (
    <Fragment>
      <ButtonMain
        variant={varientprop}
        className={classnameprop}
        style={styleprop}
        onClick={click}
        disabled={disableButtonprop}
        data-testid='button-item'
      >
        {buttonnameprop}
      </ButtonMain>
    </Fragment>
  );
};
export default Button;
