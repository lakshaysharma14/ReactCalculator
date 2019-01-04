import React, { Component } from 'react';

class Screen extends React.Component{
    render(){
      return(
      <div className="card-panel #ffccbc deep-orange lighten-4 "id={this.props.id}>
          {this.props.currentNumber}
      </div>
      )
    }
  }

export default Screen;