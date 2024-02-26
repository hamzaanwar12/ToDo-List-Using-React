import "./ToDoList.css"
import ToDo from "./ToDo"
import { useState } from "react";
const ToDoList = (props) => {

    const[newGoal,setNewGoal] = useState("")
    
    const contains = (element)=>
    {
        if(props.goals.length!=0)
            for(let i=0;i<props.goals.length;++i)
                if(props.goals[i].todo == element)
                    return true;
        return false;
    }

    const invalid = ()=>
    {
        if(newGoal.length != 0 )
        {
            for(let i=0;i<newGoal.length;++i)
                if(newGoal[i] != " ")
                    return false;
            return true;
        }
    }

    const addNewGoal = (event)=>
    {
        event.preventDefault();
        if(newGoal == "")
            alert("Insuficient Info for Goal!")
        else
        {
            let check = contains(newGoal);
            let check2 = invalid();
            if(!check && !check2)
            {
                props.addGoals(newGoal)
                setNewGoal("")
            }
            else if(check)
                alert("This Goal has already been added to your todo")
            else if(check2)
                alert("Enter some Goal")
                
            // console.log(props.goals)
        }
    }
    
    const handleOnChange = (event)=>setNewGoal(event.target.value)

    let arrayGoals ;

    if(props.goals.length == 0)
        arrayGoals = <ToDo todo = {`Not Any Goals yet!`} key = {0} /> ;
    else if(props.goals.length != 0)
        arrayGoals = Array.from((props.goals)).map(element=><ToDo todo = {element.todo}  key = {element.key} deleteGoal = {props.deleteGoal} />)
    
    return (
        <div className="ToDo">
            <div className="container">
                <h2>Course Goal</h2>
                <input type="text" placeholder="What's Your Goal" value = {newGoal} onChange={handleOnChange}/>
                <button onClick={addNewGoal}> Add Goal </button>
            </div>
            {arrayGoals}
        </div>
    );
}

export default ToDoList;