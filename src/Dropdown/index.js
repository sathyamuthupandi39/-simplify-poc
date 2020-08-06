import React from 'react'

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedValue:null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedValue: event.target.value
        });
    }

    render(){
        return(
            <div className="">
                <select className="" name="selectionBox" onChange={this.handleInputChange}>
                    <option selected>Select Values</option>
                    {this.props.data.map(values => {
                        return (
                            <option value={values}>{values}</option>
                        )
                    })
                    }
                </select>
            </div>
        )  
    }
}

export default Dropdown;