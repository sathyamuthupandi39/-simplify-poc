import React from 'react';
import Input from '../Input'
import RadioButton from '../RadioButton';

class Item extends React.Component {
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
        <div className={`${!this.props.type ? 'collapse': ''}`}>
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
    
    componentDidMount() {
      let toggler = document.getElementsByClassName("collapse");
      console.log('elemets', toggler)
      for (let i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
          this.parentElement.querySelector(".nested").classList.toggle("active")
        })
      }
    }

    list(data) {
        const children = (items) => {
          if (items) {
            return <ul className="nested">{ this.list(items) }</ul>
        }
      }
      
      return data.map((node, index) => {
        return <Item 
                  key={node.id} 
                  name={node.name} 
                  type={node.type} 
                  id={node.id} 
                  updateJsonCallback={this.props.updateJsonCallback}
                >
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