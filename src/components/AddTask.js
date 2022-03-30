import { useState } from "react"

const AddTask = ({onAdd}) => {
  const [text,setText]=useState('')
  const [Day,setDay]=useState('')
  const [reminder,setReminder]=useState(false)

//submitting the event on page
const onSubmit=(e)=>{
  e.preventDefault()

// validation 
if(!text){   
  alert('Please add a task')
  return
}
onAdd({text,Day,reminder})
// clear the form
setText('')
setDay('')
setReminder(false)

}

  return (
    <form  className='add-form'onSubmit={onSubmit}>
      <div className='form-control 
      form-control-check'>
       <label>Task</label>
    
       <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div className='form-control'>
       <label>Day And Time</label>
       <input type='text' placeholder='Add Day And Time'value={Day} onChange={(e)=>setDay(e.target.value)} />
      </div>
      <div className='form-control'>
       <label>Set Reminder</label>
       <input type='checkbox'  checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value='Save Task 'className='btn btn-block'/>
    </form>
  )
}

export default AddTask
