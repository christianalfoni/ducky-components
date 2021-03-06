import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function LeaderboardHeader8(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      size={'side-bottom'}
      >
      <Icon
        className={styles.icon}
        icon={'icon-hashtag'}
        size={'micro'}
        />
      <Typography
        className={styles.name}
        type={'caption2Strong'}
        >
          {props.nameText}
      </Typography>
      <Typography
        className={styles.activity}
        type={'caption2Normal'}
        >
        {props.activityText}
      </Typography>
      <Typography
        className={styles.saving}
        type={'caption2Strong'}
        >
          {props.savingText}
      </Typography>
    </Wrapper>
  );
}

LeaderboardHeader8.propTypes = {
  activityText: PropTypes.string,
  className: PropTypes.string,
  nameText: PropTypes.string,
  savingText: PropTypes.string
};

export default LeaderboardHeader8;
