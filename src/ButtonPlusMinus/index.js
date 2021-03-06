import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonMini from '../ButtonMini';
import styles from './styles.css';

function ButtonPlusMinus(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.largerPlusMinus]: props.large,
        [styles.inactive]: props.inactive,
        [props.className]: props.className
      })}
      onClick={!props.inactive && props.onClick}
      >
      <ButtonMini
        className={props.larger ? styles.iconLarger : null}
        icon={props.operator === "plus" ? "icon-add" : "icon-remove"}
        large={props.large}
        />
    </div>
  );
}

ButtonPlusMinus.propTypes = {
  className: PropTypes.string,
  inactive: PropTypes.bool,
  large: PropTypes.bool,
  onClick: PropTypes.func,
  operator: PropTypes.oneOf(['plus', 'remove'])
};

export default ButtonPlusMinus;
