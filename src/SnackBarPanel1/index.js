import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Button from '../Button';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function SnackBarPanel1(props) {
    let opt = '';

    if (props.button) {
        opt = (
            <div className={styles.buttonWrapper}>
                <Button
                    className={styles.button}
                    onClick={props.onClick}
                >
                    {props.buttonText}
                </Button>
            </div>
        );
    } else {
        opt = '';
    }

    return (
        <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
            size={'short'}
        >
            <div className={styles.composite}>
                <Typography
                    className={styles.typo}
                    type={'bodyTextNormal'}
                >
                    {props.text}
                </Typography>
            </div>
            {opt}
        </Wrapper>
    );
}

SnackBarPanel1.propTypes = {
    button: PropTypes.bool,
    buttonText: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default SnackBarPanel1;
