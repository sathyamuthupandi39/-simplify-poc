import React from 'react';
import Input from '../Input'
import RadioButton from '../RadioButton';

let inputBox = 0

class Item extends React.Component {
  inputBox = inputBox + 1
  constructor(props) {
		super(props);
		this.state = {
      toggle: false,
      changedText: '',
    }
  }

  radioChangeHandler = (event) => {
    event.persist()
    this.setState({
			toggle: !this.state.toggle
    })
    this.props.updateJsonCallback(event.target.id)
  }

  textChangedHandler = (event) => {
    this.setState({ changedText: event.target.value})
    this.props.updateJsonCallback(event.target.id, event.target.value)
  }
  
	render() {
  	return <li>
        <div>
          {!this.props.type &&
            <i className="arrow down"></i>
          }
          <span className='question'>
            { this.props.name }
          </span>
          <span className="responseType">
            { this.props.type === 'text' &&
              <Input 
                id={`${this.props.id}-text`}
                changed={ this.textChangedHandler}
                value={ this.state.changedText }
                placeholder="type here"
              />
            }
            { this.props.type === 'yesorno' &&
              <React.Fragment>
                <RadioButton 
                  changed={ this.radioChangeHandler } 
                  id={`${this.props.id}yes`}
                  isSelected={this.state.toggle} 
                  label="Yes" 
                  value="Yes" 
                />
              
                <RadioButton 
                  changed={ this.radioChangeHandler } 
                  id={`${this.props.id}no`}
                  isSelected={!this.state.toggle}
                  label="No" 
                  value="No" 
                />
              </React.Fragment>
            }
          </span>
        </div>
        { this.props.children }
    </li>
  }
}

class List extends React.Component {
	
    list(data) {
        const children = (items) => {
          if (items) {
            return <ul>{ this.list(items) }</ul>
        }
      }
      
      return data.map((node, index) => {
        return <Item key={node.id} name={node.name} type={node.type} id={node.id} updateJsonCallback={this.props.updateJsonCallback}>
          { children(node.items) }
        </Item>
      })
    }
    
    render() {
        return <ul>
          { this.list(this.props.data) }
      </ul>
    }
  }

  export default List