import React from "react";

class Input extends React.Component {

  render () {
    return (
      <React.Fragment>
        {this.props.label}
        <input
          id={this.props.id}
          type="text"
          value={this.props.value}
          className={this.props.fieldClass}
          onChange={this.props.onChange}
          validate={this.props.validate}
          placeholder={this.props.placeholder}
        />
      </React.Fragment>
    )
  }
}

export default Input;