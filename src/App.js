import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
      timers: [],
      errors: {
        title: false,
        project: false
      },    
      cancel: false  
    }
  }

  validateForm(title, project) {
    if (!title || !project) {
      this.setState({
        errors: {
          title: !title,
          project: !project
        }
      })
      return false
    }
    return true
  }

  triggerCancel(){
    this.setState({
      cancel: true,
      errors: {
        title: false,
        project: false
      }
    })
  }

  addData(event){
    event.preventDefault()
    const title = event.target['title'].value
    const project = event.target['project'].value
    const not_ahead = this.state.cancel

    if(not_ahead){        
        event.target.reset()
        this.setState({
          cancel: false
        })
    } else {
      
      if (this.validateForm(title, project)) {
        const newData = {
          title: title,
          project: project,
        }
        this.setState({
          timers: [...this.state.timers, newData],
          errors: {
            title: false,
            project: false
          }
        })
        event.target.reset()
      }
    }
  }

  renderTimer(timer, index) {
    return (
      <tr key={index}>
        <td>{timer.title}</td>
        <td>{timer.project}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className="container"> 
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
                       
            <form onSubmit={this.addData.bind(this)} >             
              
              <div className={`form-group ${this.state.errors.title ? 'has-error' : null}`}>  
                <label htmlFor="first-name">Title</label>
                <input type="text" className="form-control" name="title" />
              </div>
              
              <div className={`form-group ${this.state.errors.project ? 'has-error' : null}`}>
                <label htmlFor="last-name">Project</label>
                <input type="text" className="form-control" name="project" />
              </div>

              <div className="flex-container">
                <div className="item">
                  <button type="submit" className="btn btn-success btn2" name="go_ahead">Create</button>              
                </div>
                <div className="item">
                  <button type="submit" className="btn btn-danger btn2" name="not_ahead" value={this.state.cancel} onClick={this.triggerCancel.bind(this)}>Cancel</button>                  
                </div>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Project</th>
                </tr>
              </thead>
              <tbody>
                {this.state.timers.map(this.renderTimer)}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    )
  }
}

export default App


