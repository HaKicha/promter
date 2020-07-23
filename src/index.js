import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import { Provider } from "mobx-react";
import FlowStore from "./stores/FlowStore";
import QuillService from "./services/QuillService";
import { CssBaseline } from '@material-ui/core';

const flowStore = new FlowStore();
const quill = new QuillService();

const stores = {
    flowStore,
    quill
}

ReactDOM.render(
    <Provider {...stores}>
        <CssBaseline />
        <App />
    </Provider>
    , document.getElementById("root"));