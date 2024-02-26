import ToDoList from "./ToDoList"
import { useState } from "react";

function App() 
{

  const [goals, setGoals] = useState([])
  /*
  if(localStorage.length != 0)
  {
    let storedGoals = [];
    for(let i=0;i<localStorage.length;++i)
    {
      storedGoals[i] = {
        key: localStorage.key(i),
        todo: localStorage.getItem(i),
      }
    }
  }
  */
  const addGoals = (newGoal) => {
    if (goals.length == 0)
    {
      setGoals([{
        key: 1,
        todo: newGoal,
      }])
      localStorage.setItem(0,JSON.stringify(newGoal))
    }
    else
    {
      setGoals(
        [
          {
            key: goals.length + 1,
            todo: newGoal
          }
          , ...goals
        ])
        localStorage.setItem(goals.length,JSON.stringify(newGoal))
    }
  }

  const findIndex = (goalCompleted) => {
    console.log(goals)
    // console.table(goals)
    for (let i = 0; i < goals.length; ++i)
      if (goals[i].todo == goalCompleted)
        return i;
  }

  const deleteGoal = (goalCompleted) => 
  {
    if(goals.length == 0)
    {
      alert("No Goals are left to achieve")
      return
    }

    let x = findIndex(goalCompleted);
    let goalsLeft = []

    console.log(`index for ${goalCompleted} is ${x}`)
    console.table(goals)

    let j = 0
    if (x == 0)
    { 
      for(let i =1;i<goals.length;++i)
      {
        goalsLeft[j] = (goals[i])
        ++j;
      }
      setGoals(goalsLeft);
    }
    else if (x == goals.length - 1)
    {
      for(let i =0;i<goals.length-1;++i)
      {
        goalsLeft[j] = (goals[i])
        ++j;
      }
      setGoals(goalsLeft);
    }
    else
    {
      for(let i =0;i<goals.length;++i)
      {
        if(i==x)
          continue;
        else
        {
          goalsLeft[j] = (goals[i])
          ++j;
        }
      }
      setGoals(goalsLeft);
    }
  }

  return <ToDoList goals={goals} addGoals={addGoals} deleteGoal={deleteGoal} />;

}

export default App;
