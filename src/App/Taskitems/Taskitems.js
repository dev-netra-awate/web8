import React, {useState} from 'react';

import {Task} from '../Task/Task.js';
//import corresponding scss file
import './Taskitems.scss';

export class Taskitems extends React.Component {
    
    constructor(props) {
        super(props);
        const taskitems = this.props.taskitems;
    }

state = {
    divcontainer: false,
}

handleCheck(e) {
    var element =e.target.nextElementSibling;
    alert(element.style);
}

deleteHandler(id){
    this.props.deleteHandler(id);
}  
 
updateTaskHandler(task,id){
    this.props.updateTaskHandler(task,id);
}   
toggleTaskComplete(task,id){
    this.props.toggleTaskComplete(task,id);
} 
    render() {

        var Handlechange = e => {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x=this.state.divcontainer;
        //creating a variable for tasks
      
        const taskitemsElements = this.props.taskitems.map((c, i) =>

        //key is used to uniquely identify item of each list
            <li key={i}> 
            {/* <div className="div-list-title" onClick={this.handleCheck}>
                {c.title} 
            </div>
            
             <div className="div-list-details" id= "div-list-details">
             
                <br></br> {c.description} 
                <br></br>{c.creationDate} 
                <br></br>{c.id} 
                <br></br> <button name="deleteButton">delete</button>
            </div> */}
           <Task task={c} deleteHandler={this.deleteHandler.bind(this)} updateTaskHandler={this.updateTaskHandler.bind(this)} toggleTaskComplete={this.toggleTaskComplete.bind(this)}></Task>
            </li>);
     
    return (    
        <div className="container-task" >
            Taskitems
            <ul className="ul-items">{ taskitemsElements }</ul>
        </div>
        );
    }
}