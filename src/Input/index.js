import React from "react";

const Input = (props) => {
  return (
      <React.Fragment>
          <input 
            id={props.id} 
            onChange={props.changed} 
            value={props.value} 
            type="text" 
            className={props.className} 
            placeholder={props.placeholder}
          />
      </React.Fragment>
  );
}

export default Input;