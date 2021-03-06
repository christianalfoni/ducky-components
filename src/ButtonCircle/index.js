import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Typography from '../Typography';
import styles from './styles.css';

function ButtonCircle(props) {
  return (
    <button className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Typography
        className={styles.text}
        type="bodyTextNormal"
        >{props.children}</Typography>
    </button>
  );
}

ButtonCircle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

export default ButtonCircle;
