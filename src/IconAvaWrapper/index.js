import Avatar from '../Avatar';
import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';


function IconAvaWrapper(props) {
  if (props.avatar) {
    return (
      <Wrapper
        className={classNames(
          styles.wrapper,
          {[styles.pointerCursor]: props.onClick, [props.className]: props.className}
        )}
        onClick={props.onClick}
        size={props.size === 'small' ? 'slender' : 'narrow'}
        >
        <Avatar
          image={props.avatar}
          size={'small'}
          />
      </Wrapper>
    );
  }

  return (
    <Wrapper
      className={classNames(
        styles.wrapper,
        {[styles.pointerCursor]: props.onClick, [props.className]: props.className}
      )}
      onClick={props.onClick}
      size={props.size === 'small' ? 'slender' : 'narrow'}
      >
      <Icon
        icon={props.icon}
        size={'standard'}
        />
    </Wrapper>
  );
}

IconAvaWrapper.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string
};

export default IconAvaWrapper;
