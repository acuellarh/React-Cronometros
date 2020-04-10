import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
      users: [],
      name: '',
      lastname: ''
    }
  }

  addUser(event){  
    event.preventDefault();
    
    const objID = this.state.users.length === 0 ? 1 : this.state.users.length + 1  
    this.setState({
      users: this.state.users.concat({id: objID, name: this.state.name, lastname: this.state.lastname})
    }) 
    
  }

  updateUsername (event) {
    this.setState({
      name: event.target.value
    })
  }

  updateUserlastname (event){
    this.setState({
      lastname: event.target.value
    })
  }

  render() {
    return (
      <div className="container"> 
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addUser.bind(this)}>             
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" onChange={this.updateUsername.bind(this)}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" onChange={this.updateUserlastname.bind(this)}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) =>
                  <tr key={user.id}>
                    <td>
                      {user.name}                   
                    </td>  
                    <td>
                      {user.lastname}
                    </td>  
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


