import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap';

class Cronometro extends Component{
    render(){
      return(
            <div>
                <Card className="card text-center" key={this.props.timer.id}>              
                  <Card.Header as="h2">
                    {this.props.hour}:{this.props.minute}:{this.props.second}
                  </Card.Header>                 
                      { this.props.timer.optn === "start" ?
                        <Button variant="info" size="lg" onClick={this.props.onStart}>{this.props.timer.optn}</Button>
                        :
                        <Button variant="warning" size="lg" onClick={this.props.onStop}>{this.props.timer.optn}</Button>
                      }           
                </Card>
              </div>
      )
    }
  }

  export default Cronometro;