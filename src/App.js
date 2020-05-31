import React from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends React.Component {
	render() {
  	return <li>
      	{ this.props.name }
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
      return <Item key={ node.id } name={ node.name }>
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

function App() {
  return (
    <div className="App">
      <List data={ data } />,
    </div>
  );
}

const data = [{
	"id": 1,
  "name": "Section 1",
  "items": [{
  	"id": 2, 
    "name": "Question 1"
  }, {
  	"id": 3,
    "name": "Question 2"
  }]
}, {
	"id": 4,
  "name": "Section 2",
  "items": [{
    "id": 5,
    "name": "Sub section",
    "items": [{
    	"id": 6,
      "name": "Question 1"
    }]
  }]
}];

export default App;
