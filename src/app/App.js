import React from 'react';
import '../index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Editor from "../components/Editor";
import PromterView from "../components/PromterView";
import NavBar from "../components/NavBar";
import Content from "@/components/common/Content";


function App() {
  return(
      <>
        <BrowserRouter>
          <NavBar />
          <Content>
              <Switch>
                  <Route component={PromterView} path={'/promter'} />
                  <Route component={Editor} path={['/', '/editor']} />
              </Switch>
          </Content>
        </BrowserRouter>
      </>
  )
}

export default App;
