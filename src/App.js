import { useState, useEffect } from "react";
import Input from "./Button";



function App() {

  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const [toDos, setToDos] = useState([]);


  const onSubmit = (event) => {
    event.preventDefault(); // form이 서밋으로 인해 페이지를 리셋하는 것을 방지 한다. 

    if (toDo === "") {
      return;
    }
    setToDos((currentToDos) => [...currentToDos, toDo]); //처음에 hello 입력하면 ["hello"] 반환
    setToDo("")

  }

  const deletBtn = (index) => {
    setToDos((currentArray) => {
      const newArray = [...currentArray];
      newArray.splice(index, 1);
      return newArray;

    })
  }



  return <div>
    <h3>MY ToDos{toDos.length}</h3>
    <form onSubmit={onSubmit}>
      <Input value={toDo} placeholder={"Write a your To Do list"} onChange={onChange} ClassName="input" />
      <button>ToDo</button>
    </form>
    <hr />
    <ul>
      {toDos.map((x, index) => <li key={index}>{x} <button onClick={() => deletBtn(index)} type="button">{index}</button></li>)}
    </ul>



  </div>



}




export default App;
