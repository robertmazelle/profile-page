import React from "react"
import { Router } from "@reach/router"
import Projects from "./projects"

const App = () => {
  return (
      <Router basepath="/app">
        <Projects path="/profile" />
      </Router>
  )
}
export default App