import React from 'react'

const RadioButton = (props) => {
    return (
        <React.Fragment>
            <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </React.Fragment>
    );
}

export default RadioButton;