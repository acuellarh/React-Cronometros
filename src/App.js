import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
 
    }
  }



  render() {
    return (
      <div className="container"> 
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <form >             
              <div className="form-group">
                <label htmlFor="first-name">Title</label>
                <input type="text" className="form-control" name="title" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Project</label>
                <input type="text" className="form-control" name="project" />
              </div>

              <div className="flex-container">
                <div className="item">
                  <button type="submit" className="btn btn-success btn2" >Create</button>              
                </div>
                <div className="item">
                  <button type="submit" className="btn btn-danger btn2">Cancel</button>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    )
  }
}

export default App


