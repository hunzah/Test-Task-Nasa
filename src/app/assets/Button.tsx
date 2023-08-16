import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ text }) => {
    return <button className={styles.button}>{text}</button>;
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
