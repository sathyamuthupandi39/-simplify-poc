import React from 'react';
import Input from '../Input'
import RadioButton from '../RadioButton';

let inputBox = 0

class Item extends React.Component {
  inputBox = inputBox + 1
  radioChangeHandler = (event) => {
    console.log('event')
  }
	render() {
  	return <li>
      	{ this.props.name }
        { this.props.type === 'text' &&
          <Input 
            id={`${inputBox}`} 
            placeholder="type here"
          />
        }
        { this.props.type === 'yesorno' &&
          <React.Fragment>
            <RadioButton 
              changed={ this.radioChangeHandler } 
              id="1" 
              isSelected={true} 
              label="Yes" 
              value="Yes" 
            />
          
            <RadioButton 
              changed={ this.radioChangeHandler } 
              id="2" 
              label="No" 
              value="No" 
            />
          </React.Fragment>
        }
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
        return <Item key={ node.id } name={ node.name } type={ node.type }>
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