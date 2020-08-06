import React from "react";

const Commentbox = (props) => {
  return (
      <React.Fragment>
          <textarea 
            id={props.id} 
            onChange={props.changed} 
            value={props.value} 
            placeholder={props.placeholder}
            rows="5"
            cols="60"
            className={props.className}
          />
      </React.Fragment>
  );
}

export default Commentbox;