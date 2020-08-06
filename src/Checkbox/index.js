import React from 'react'

const Checkbox = (props) => {
    return (
        <div>
            <input id={props.id} onChange={props.changed} value={props.value} type="checkbox" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default Checkbox;