import React from 'react';
import ButtonRaised from './../ButtonRaised';
import styles from './styles.css';
import classNames from 'classnames';

class SectionFooterOK extends React.Component {
    renderRaisedButton(disabled) {
        if (disabled) {
            return (
                <ButtonRaised
                    className={styles.button}
                    disabled
                    onClick={this.props.onClick}
                >
                    <span className={styles.buttonName}>{this.props.buttonName}</span>
                </ButtonRaised>
            );
        }
        return (
            <ButtonRaised
                className={styles.button}
                onClick={this.props.onClick}
            >
                <span className={styles.buttonName}>{this.props.buttonName}</span>
            </ButtonRaised>
        );
    }
    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className}
            )}>
                {this.renderRaisedButton(this.props.disabled)}
            </div>
        );
    }
}

SectionFooterOK.propTypes = {
    buttonName: React.PropTypes.string,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

export default SectionFooterOK;
