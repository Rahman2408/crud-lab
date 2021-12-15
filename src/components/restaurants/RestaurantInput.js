import React, { Component } from 'react';

class RestaurantInput extends Component {
  // handleSubmit(e) {
  //   e.preventDefault() ;
  //   console.log(e.target.value)
  // }

  render() {
    return (
      <div>
        Restaurant Input For New Business Goes Here :
        < form onSubmit={this.handleSubmit()}>
          <input type={"text"} placeholder='Restaurant Name'>Enter Business Name:</input>
          <input type={"submit"}/>Submit Dine-In <input />

          
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
