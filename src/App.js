import React from 'react'
import TodoList from './Todo/TodoList'
import TodoItem from './Todo/TodoItem'


function App() {
  const todos = [
      {id: 1, completed: false, title: "Daniel studying React.js"},
      {id: 2, completed: false, title: "Daniel studying Vue.js"},
      {id: 3, completed: false, title: "Daniel studying Angular.js"}
  ]

  return (
    <div className="wrapper">
        <h1>
          React
        </h1>
        <TodoList todos = {todos} />
    </div>
  )
}

export default App;
