import React from 'react'
import './App.css'
import List from './List'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <List data={ data } />,
    </div>
  );
}

const data = [{
	"id": 1,
  "name": "Threat Event Section",
  "items": [{
  	"id": 2, 
    "name": "Do you know the Loss Event Frequency for this Risk?",
    "type": "yesorno"
    }, {
      "id": 3,
      "name": "Enter the frequency for this ThreatEvent",
      "type":"text"
  }]
  }, {
    "id": 4,
    "name": "Section 2",
    "items": [{
      "id": 5,
      "name": "Sub section",
      "items": [{
        "id": 6,
        "name": "Do you know the Vulnerability Value for this Risk?",
        "type": "yesorno"
      }, {
        "id": 7,
        "name": "Do you know the Threat event Frequency for this Risk?",
        "type": "yesorno"
      }]
    },
    {
      "id": 8,
      "name": "Sub section",
      "items": [{
        "id": 9,
        "name": "Do you know the Vulnerability Value for this Risk?",
        "type": "yesorno"
      }, {
        "id": 10,
        "name": "Do you know the Threat event Frequency for this Risk?",
        "type": "yesorno"
      }]
    }]
}]

export default App
