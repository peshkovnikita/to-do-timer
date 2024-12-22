import React, { Component } from 'react'

export default class NewTaskForm extends Component {

  state = {
    taskText: '',
    taskMin: '',
    taskSec: ''
  }

  onTextChange = (e) => {
    this.setState({
      taskText: e.target.value
    })
  }

  onMinChange = (e) => {
    const newValue = e.target.value;
    // if (newValue === '') this.setState({ taskMin: '' });
    if (/^\d{0,3}$/.test(newValue) && Number(newValue) <= 999) {
      this.setState({
        taskMin: newValue
      });
    }
  }

  onSecChange = (e) => {
    const newValue = e.target.value;
    // if (newValue === '') this.setState({ taskSec: '' });
    if (/^\d{0,2}$/.test(newValue) && Number(newValue) <= 59) {
      this.setState({
        taskSec: newValue
      });
    }
  }

  onSubmitTask = (e) => {
    e.preventDefault()
    const { taskText, taskMin, taskSec } = this.state;
    const totalSeconds = Number(taskMin) * 60 + Number(taskSec)
    this.props.onItemAdded(taskText, totalSeconds)

    this.setState({
      taskText: '',
      taskMin: '',
      taskSec: ''
    })
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <form action='' onSubmit={this.onSubmitTask} className='new-todo-form'>
          <input type='text'
                 autoFocus
                 className='new-todo'
                 placeholder='What needs to be done?'
                 value={this.state.taskText}
                 onChange={this.onTextChange}
          />
          <input type="text" value={this.state.taskMin} onChange={this.onMinChange} className="new-todo-form__timer" placeholder="Min" />
          <input type="text" value={this.state.taskSec} onChange={this.onSecChange} className="new-todo-form__timer" placeholder="Sec" />
          <button type='submit' className='visually-hidden'/>
        </form>
      </header>
    )
  }
}
