import './Task.scss';
import React, { useEffect, useState } from 'react';
import { AddNewTodo } from '../AddNewTodo/AddNewTodo';
import {Edittask} from '../EditTask/Edittask.js'
export function Task (props){
   const [visible,setVisible]=useState(false);
   const [descVisible,setdescVisible]=useState(false);
   const [taskStatus,settaskStatus]=useState(props.task.isTaskComplete)
 
   const onTaskClick=(title)=>{
      //  alert(title);
    }
    const deleteItem=(id)=>{
        props.deleteHandler(id);
    }
    const updateTaskHandler=(task,id)=>{
        props.updateTaskHandler(task,id);
    }
    const toggleVisibility=()=>{
        setVisible(!visible);
    }   

     const toggleDescVisibility=()=>{
        setdescVisible(!descVisible);
        console.log(props.task);
    }
     const toggleTaskStatus=(id)=>{
         const task={'isTaskComplete':taskStatus};
        settaskStatus(!taskStatus);
       props.toggleTaskComplete(task,id)

    }
    return(
        <div className='container-task'>
            <p>{props.task.title}</p>
            <p>{props.task.isTaskComplete?'Complete':'Incomplete'}</p>
            <button onClick={(e)=>{toggleDescVisibility()}}> Show Desc</button>
            <button onClick={(e)=>{toggleTaskStatus(props.task.id)}}> Change Task Status</button>
           {descVisible?<p>{props.task.description}</p>:null} 
            <button  onClick={(e)=>{deleteItem(props.task.id)}}>Delete</button>
           <button onClick={(e)=>{toggleVisibility()}}> EDIT</button> 
            {visible?<Edittask task={props.task}  updateTaskHandler={updateTaskHandler}></Edittask>:null} 
        </div>
    
    )
}


 