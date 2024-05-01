import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Text, setText] = useState("");
  let [mainText, setmainText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.firstChild.value.length <= 0) {
      alert("ToDo's Cannot be Empty")
    }
    else {
      setmainText([...mainText, { Text }]);
      setText("");
    }
  }
  const deletHandler = (index) => {
    let copyText = [...mainText];
    copyText.splice(index, 1);
    setmainText(copyText)
  }
  const editHandler = (index) => {
    let copyText = [...mainText];
    copyText.splice(index, 1);
    setmainText(copyText);
    setText((mainText[index]).Text);
  }


  let renderTask = <>{mainText.map((item, index) => [
    <li key={item.Text} className='flex w-1/2 justify-between px-6 py-3 items-cente rounded-2xl bg-blue-300'><h2 className='w-1/2 text-2xl font-bold text-blue-950'>{item.Text}</h2>
      <button onClick={() => {
        deletHandler(index)
      }} className='text-xl font-bold text-white bg-blue-800 hover:bg-blue-950 px-4 py-1 rounded-xl'>Delete</button>
      <button onClick={() => {
        editHandler(index)
      }} className='text-xl font-bold text-white bg-blue-800 hover:bg-blue-950 px-4 py-1 rounded-xl'>Edit</button>
    </li>
  ])}</>
  return (
    <>
      
      <main className='flex flex-col items-center py-3 gap-10 box-border overflow-x-hidden w-screen h-screen bg-blue-200'>
      <div className="imp text-center bg-blue-950 w-screen py-2 fixed bottom-0 pb-10">
        <h2 className='font-2xl font-bold text-white'>Created By Yashas M Achar</h2>
        <a className='underline font-xl text-white font-semibold' href="https://www.linkedin.com/in/yashas-achar-aa9788231/">Linkedin</a>
      </div>
        <h1 className='text-6xl font-bold text-blue-800'>Todo List</h1>
        <form onSubmit={submitHandler} className='w-1/2 bg-white h-10 rounded-2xl flex justify-center items-center'>
          <input value={Text} onChange={(e) => { setText(e.target.value) }} className='px-4 py-2 text-xl outline-none box-border rounded-2xl w-full h-full' placeholder='Enter Task' type="text" />
          <button className='w-1/4 h-full px-2 rounded-2xl bg-blue-800 hover:bg-blue-950 text-white font-bold text-xl'>Add Task</button>
        </form>
        <ul className='w-screen flex flex-col items-center'>{renderTask}</ul>
      </main>
    </>
  )
}

export default App
