import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/ProjectState";
import TaskState from "./context/tasks/TaskState";
import AlertState from "./context/alerts/AlertState";
import AuthenticationState from "./context/authentication/AuthenticationState";

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthenticationState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthenticationState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
