import React, {Component} from "react";
class Hello extends Component {
  constructor(props){
    super(props);

    this.state = {
      newItem:"",
      list:[]
    }
  }

  updateInput(key,value){
    this.setState({
      [key]: value
    })
  }
  addItem(){
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem:" "
    });
  }
  render(){
    return (
      <div className = "App">
        <h1>
        <div>
         Add an Item...
         <br/>
         <input type = "text"
         placeholder="Enter text here"
         defaultValue = {this.state.newItem}
         onChange={e => this.updateInput("newItem",e.target.value)}
         />
         <button
         onClick={() => this.addItem()}>
          Add
         </button>
         <br/>
         <ul>
          {this.state.list.map(item => {
            return(
              <li key = {item.id}>
                {item.value}
              </li>
            )
          })}
         </ul>
        </div>
        </h1>
      </div>
    )
  }
}

export default Hello;