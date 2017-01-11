import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import Typography from '../Typography';

function FootprintCategoryHeader(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, props.className)}
      size="short"
      >
      <Icon
        className={styles.icon}
        icon={props.icon}
        size="large2"
        />
      <div className={styles.textWrapper}>
        <Typography
          className={styles.title}
          type="ingressStrong"
          >
          {props.title}
        </Typography>
        <Typography
          className={styles.subTitle}
          type="bodyTextNormal"
          >
          {props.subTitle}
        </Typography>
      </div>
    </Wrapper>
  );
}

FootprintCategoryHeader.propTypes = {
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  subTitle: React.PropTypes.node,
  title: React.PropTypes.node
};


export default FootprintCategoryHeader;
