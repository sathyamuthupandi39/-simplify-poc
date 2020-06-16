import React from 'react'
import './App.css'
import List from './List'
import Header from './Header'
import data from './data.json'

let questionAndAnswer = data.questionaire


class App extends React.Component{
  constructor(props) {
    super(props)
    this.updateJson = this.updateJson.bind(this)
  }

  updateJsonObject (data, id, value) {
    const children = (items, id, value) => {
      if (items) {
        this.updateJsonObject(items, id, value)
      }
    }
    data.forEach(question => {
      if (id.includes(question.id)) {
        question.answer = id.includes('yes') ? 'yes' : 'no'
        if (value) {
          question.answer = value
        }
      }
      children(question.items, id, value)
    })
  }
  
  updateJson (id, value) {
      this.updateJsonObject(questionAndAnswer, id, value)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <List data={ questionAndAnswer } updateJsonCallback={this.updateJson}/>,
      </div>
    )
  }
}

export default App
