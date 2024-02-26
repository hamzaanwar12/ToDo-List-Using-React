import "./ToDo.css"

const ToDo = (props)=>
{
    let handleClick = (event)=>
    {
        event.preventDefault();
        if(props.todo === "Not Any Goals yet!")
        {
            alert("No Goals are present to achieve")
            return
        }
        // console.log(event)
        console.log(props.todo + " is Clicked")
        props.deleteGoal(props.todo)
    }
    return(
        <h1 className="todo" onClick ={handleClick} key = {props.key} >{props.todo} </h1>
    );
}

export default ToDo