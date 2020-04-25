import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPencilAlt,FaTrashAlt } from "react-icons/fa";

// https://www.youtube.com/watch?v=WTh54FMNrbU


class App extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
      timers: [
        { id: 0, title: "title0 ", project: "React0", edit:true},    
        { id: 1, title: "title1 ", project: "React1", edit:true },     
        { id: 2, title: "title2 ", project: "Makeit2", edit:true}
      ],
      errors: {
        title: false,
        project: false
      },    
      cancel: false     
    }
    this.triggerCancel = this.triggerCancel.bind(this)    
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
    const id_val = this.state.timers.length

    if(not_ahead){        
        event.target.reset()
        this.setState({
          cancel: false
        })
    } else {
      
      if (this.validateForm(title, project)) {
        const newData = {
          id: id_val,
          title: title,
          project: project,
          edit: true
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

  changeEditMode (id_clicked, event)  {     
    const newTimers = this.state.timers.map(timer => {
      if (timer.id === id_clicked){
        timer.edit = !timer.edit
        console.log("el id para editar es " + timer.id)
      }
      return timer
    })    
    this.setState({
      timers: newTimers   
    })  
  }

  updateComponentValue (id_clicked, event)  {    
    event.preventDefault()
    const title = event.target['title'].value
    const project = event.target['project'].value
    const newTimers = this.state.timers.map(timer => {
      if (timer.id === id_clicked){
        timer.edit = !timer.edit
        timer.title = title
        timer.project = project
      }
      return timer
    })    
    this.setState({
      timers: newTimers   
    })  
  }

  delete (index)  { 
    const indexValue = index
    console.log("el id borrado fue " + indexValue)    
    this.state.timers.splice(indexValue, 1)

    const newTimers = this.state.timers.map((timer, index) => {
      if (true){
        timer.id = index
      }
      return timer
    });  
       
    this.setState({
      timers: newTimers   
    })
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
          </div> {/* div col */}
        </div> {/* div row*/}
      
        {this.state.timers.map ((timer, index) =>
          <div className="row" key={index}>
            {timer.edit ?
              <div className="col-sm-4 col-sm-offset-4">    
                <form>
                  <Card>
                    <Card.Body>
                    <Card.Title><strong>{timer.title}</strong></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{timer.project}</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>         
                    <Card.Text className="btn-align ">                     
                      <Button variant="light" onClick={this.delete.bind(this, index)}> <FaTrashAlt  color='' size='1.0em' /> </Button>              
                      <Button variant="light" onClick={this.changeEditMode.bind(this, timer.id)} > <FaPencilAlt color='' size='1.0em' /> </Button> 
                    </Card.Text>           
                    <Button variant="success" block > Start</Button>          
                  </Card.Body>      
                  </Card>
                </form>  
              </div>
              :              
              <div className="col-sm-4 col-sm-offset-4">    
                <form onSubmit={this.updateComponentValue.bind(this, timer.id)}>            
                  <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" defaultValue={timer.title} name="title" />
                  </div>
                  <div>
                    <label htmlFor="project">Project</label>
                    <input type="text" defaultValue={timer.project} name="project" />
                  </div>
                  <div className="flex-container">
                    <div className="item">
                      <button type="submit" className="btn btn-success btn2" >Update</button>              
                    </div>
                    <div className="item">
                      <button type="submit" className="btn btn-danger btn2" onClick={this.changeEditMode.bind(this, timer.id)}>Cancel</button>                  
                    </div>
                  </div>                    
                </form>  
              </div>
            }
          </div>  
        )}

      </div>  
    )
  }
}

export default App


