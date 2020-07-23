import React from 'react';
import '../index.css';
import firebaseConfig from "../firebaseConfig.json";
import * as firebase from "firebase/app";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Editor from "../components/Editor";
import PromterView from "../components/PromterView";
import NavBar from "../components/NavBar";

firebase.initializeApp(firebaseConfig)

function App() {
  return(
      <>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route component={PromterView} path={'/promter'} />
            <Route component={Editor} path={['/', '/editor']} />
          </Switch>
        </BrowserRouter>
      </>
  )
}

export default App;
