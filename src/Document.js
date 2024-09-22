import React, { Component } from 'react'

export default class Document extends Component {   

    constructor(props){
        super(props)
        this.id = props.id;
        this.dateEdition = props.dateEdition;
    }

  render() {
    
    return (
      <div>
        <h1>{this.id}</h1>
        <h1>{this.dateEdition}</h1>
      </div>
    )
  }
}



