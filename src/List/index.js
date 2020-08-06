import React from 'react';
import Input from '../Input'
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import MatrixTable from '../MatrixTable';
import CustomDropdown from '../Dropdown';
import Commentbox from '../Commentbox';

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
    const likelyscale = ['1','2','3','4','5','6','7','8','9','10']

    const checkboxValues = ['All variable charges', 'Incremental increases', 'Surcharges', 'Overtime', 'Fees', 'Discounts available']
    
    const columns = [{ heading: 'Very Satisfied', property: 'very-satisfied' }, { heading: 'Somewhat satisfied', property: 'somewhat-satisfied' }, { heading: 'Neither satisfied nor dissatisfied', property: 'neither' }, { heading: 'Somewhat dissatisifed', property: 'some-dissatisfied' }, { heading: 'Very dissatisifed', property: 'Very-dissatisfied' }]

    const data = [{ name: 'Customer Service' }, { name: 'Product Packaging' }, { name: 'On-Time Arrival' }, { name: 'Product Delivery' }]

    const dropdownValues = ['Yes', 'No', 'NP']

    const radiobuttonValues = ['Extremely dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Extremely satisfied']
    
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
                className="customTextbox"
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
            { this.props.type === 'likelyscale' &&
              <div>
                <span>NOT AT ALL LIKELY</span>
                <div className="radio-group">
                  {likelyscale.map(likescale => {
                    return <RadioButton
                            changed={ this.radioChangeHandler } 
                            id={`${this.props.id}-${likescale}`}
                            // isSelected={!this.state.toggle}
                            label={likescale}
                            value={likescale}
                          />
                    })
                  }
                </div>
                <span>EXTREMELY LIKELY</span>
              </div>
            }
            { this.props.type === 'checkbox' &&
              <div className="checkbox-group">
                {checkboxValues.map(checkboxValue => {
                  return <Checkbox
                          // changed={ this.radioChangeHandler } 
                          id={`${this.props.id}-${checkboxValue}`}
                          // isSelected={!this.state.toggle}
                          label={checkboxValue}
                          value={checkboxValue}
                        />
                  })
                }
              </div>
            }
            { this.props.type === 'matrixtable' &&
                <MatrixTable 
                  columns={columns} 
                  data={data} 
                  propertyAsKey='name' 
                />
            }
            { this.props.type === 'dropdown' &&
                <CustomDropdown
                  data={dropdownValues}
                />
            }
            { this.props.type === 'radiobutton' &&
                <div className="">
                {radiobuttonValues.map(radioValue => {
                  return <div>
                          <RadioButton
                              changed={ this.radioChangeHandler } 
                              id={`${this.props.id}-${radioValue}`}
                              // isSelected={!this.state.toggle}
                              label={radioValue}
                              value={radioValue}
                              className="customradio"
                            />
                        </div>
                  })
                }
              </div>
            }
            { this.props.type === 'commentbox' &&
              <Commentbox 
                id={`${this.props.id}-text`}
                changed={ this.textChangedHandler}
                value={ this.state.changedText }
                placeholder="Hey.... say something!!!"
                className="customTextarea"
            />
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