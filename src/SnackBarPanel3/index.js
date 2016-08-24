import Icon from '../Icon';
import LabelStandard from '../LabelStandard';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import Counter from '../Counter';
import styles from './styles.css';
import React from 'react';
const PropTypes = React.PropTypes;

function SnackBarPanel3(props) {
    let opt = '';

    if (!props.show) {
        return null;
    }

    if (props.type === 'co2') {
        opt = (
            <div className={styles.label}>
                <LabelStandard
                    className={styles.typo}
                    content={<Counter decimals={1}
                        number={props.co2Pt}
                             />}
                    icon={'icon-leaf'}
                />
            </div>
    );
    } else if (props.type === 'points') {
        opt = (
            <div className={styles.label}>
                <LabelStandard
                    className={styles.typo}
                    content={<Counter number={Number(props.duckyPt)} />}
                    icon={'icon-brightness_high'}
                />
            </div>
        );
    } else {
        opt = (
            <div className={styles.label}>
                <LabelStandard
                    className={styles.typo}
                    content={<Counter decimals={1}
                        number={props.co2Pt}
                             />}
                    icon={'icon-leaf'}
                />
                <div className={styles.labelTwo}>
                    <LabelStandard
                        className={styles.typo}
                        content={<Counter number={Number(props.duckyPt)} />}
                        icon={'icon-brightness_high'}
                    />
                </div>
            </div>
        );
    }

    return (
        <Wrapper
            className={styles.wrapper}
            size={'standard'}
        >
            <div className={styles.wrapperIcon}>
                <Icon
                    icon={props.duckyIcon}
                    size={'large2'}
                />
            </div>
            <Typography className={styles.msgText}
                type="ingressNormal"
            >
                {props.msgText}
            </Typography>

            {opt}

        </Wrapper>
  );
}

SnackBarPanel3.propTypes = {
    co2Pt: PropTypes.number,
    duckyIcon: PropTypes.number,
    duckyPt: PropTypes.number,
    msgText: PropTypes.string,
    show: PropTypes.bool,
    type: PropTypes.oneOf(['points', 'co2', 'both'])
};

export default SnackBarPanel3;
