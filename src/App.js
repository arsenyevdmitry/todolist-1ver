import React, { useEffect, useState } from "react"

export function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // Используем Fetch API для получения данных
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data)
      })
      .catch((error) => console.error("Error fetching the todos:", error))
  }, [])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo List</h1>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px",
    backgroundColor: "#e3e3e3",
    margin: "10px 0",
    borderRadius: "4px",
  },
}
export default App
