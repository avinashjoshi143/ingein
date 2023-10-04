import React from "react";
import './input.styles.css';

const Input = (props) => {
    const {inpType,placeholder} = props;
    return(
        <>
            <label>{placeholder}</label>
            <input className="form-input" type={inpType} placeholder={placeholder} />
        </>
    )
}

export default Input;