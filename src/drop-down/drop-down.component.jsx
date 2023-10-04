import React from "react";

const DropDown = (props)=> {
    const {id,values,placeholder} = props
    const dropdownstyle = {
        width : '53%'
    }
    return(
        <>
            <label>{placeholder}</label>
            <select style={dropdownstyle} placeholder={placeholder} className="form-input" id={id}>
                <option>{placeholder}</option>
                <option value={values[0]}>{values[0]}</option>
                <option value={values[1]}>{values[1]}</option>
                <option value={values[2]}>{values[2]}</option>
            </select>
        </>
    )
}

export default DropDown;