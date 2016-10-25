import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SnackBarWrapper(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classNames(styles.snackbarWrapper, {
      [props.className]: props.className
    })}>
      <div
        className={styles[(props.show ? 'showbottom' : 'bottom')]}
        >
        {props.children}
      </div>
    </div>
  );
}

SnackBarWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool
};

export default SnackBarWrapper;
