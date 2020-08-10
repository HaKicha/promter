import React from 'react';
import '../index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Editor from "../components/Editor";
import PromterView from "../components/PromterView";
import NavBar from "../components/NavBar";
import Content from "@/components/common/Content";
import {EDITOR, PROMTER} from "@/utils/routes";
import NavPane from "@/components/NavPane";


function App() {
  return(
      <>
        <BrowserRouter>
          <NavBar />
          <NavPane />
          <Content>
              <Switch>
                  <Route component={PromterView} path={PROMTER} />
                  <Route component={Editor} path={['/', EDITOR]} />
              </Switch>
          </Content>
        </BrowserRouter>
      </>
  )
}

export default App;
