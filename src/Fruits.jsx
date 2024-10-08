import React, { Component } from 'react'
import "./styles.css"

export default class Fruits extends Component {

    constructor(props){
        super(props)
        this.state = {fruits:["soso","koko","dodo"],inputValue:""};
    }

    handleChange(event){
        this.setState({inputValue:event.target.value})
    }

    handleAdd(){
        this.setState((prevState) => ({
            fruits: [...prevState.fruits, prevState.inputValue],
            inputValue: '' // Clear input after adding
        }));
    }

    handleDelete(index){

        console.log("function worked",index);
        
        let copy = [...this.state.fruits];
        let deletedItem = copy.filter((item,i) => i !== index);
        this.setState({fruits:deletedItem});
    }
    
  render() {
    return (
      <div className='fruits'>
        <h1>Fruits lists</h1>
        <ul>
            {
                this.state.fruits.map((fruit,index) =>{
                    return <li key={index}>{fruit} <button onClick={() => this.handleDelete(index)}>X</button></li>
                })
            }
        </ul>
        <input type='text' 
        placeholder='Enter somthing to add...' 
        value={this.state.inputValue} 
        onChange={(event) => this.handleChange(event)} />
        <button onClick={() => this.handleAdd()}>Add</button>
      </div>
    )
  }
}
