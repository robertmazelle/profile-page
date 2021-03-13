import React from 'react';
import classNames from 'classnames';

import '../styles/button.css';

const Button = props => {

    const { children, className } = props;

  return (
    <button className={classNames(className, "default")}>
    {children}
  </button>
  );
};

export default Button;

export const DefaultButton = props => {;
  return <Button {...props} className="defaultButtonRoot" />;
};

DefaultButton.displayName = 'DefaultButton';
