// Add BandInput component
import React, { Component } from 'react';

 
class BandInput extends Component {
  
  state = {
    name: ''
  };
 
  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    // console.log(this.props)
  };
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Band</label>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


 export default BandInput
