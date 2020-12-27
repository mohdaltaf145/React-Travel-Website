import React from "react";
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = (props) => {

    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    console.log(props);
    return(
    <Link to="sign-up" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} >
            {props.children}
        </button>
    </Link>
    );
};


export default Button;