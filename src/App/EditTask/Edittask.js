import './EditTask.scss';
import React, { useState } from 'react';

export function Edittask (props){
    const [title,setTitle]=useState(props.task.title);
    const [description,setDescription]=useState(props.task.description);
   
      


   const onSubmit=()=>{
       const task={
           'title':title,'description':description
       }
       props.updateTaskHandler(task,props.task.id);
    }
    
    
    return(
        <div className='container-task'>
<form  >
      <label>Enter your Title:
      <input
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      </label> 
      <label>Enter your Description:
      <input
          type="description" 
          value={description}
          onChange={(e) => {setDescription(e.target.value);}}
        />
        <button type="submit" onClick={(e=>{onSubmit()})}>submit</button> 
      </label>

    </form>
        </div>
    
    )
}


 