import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import { Provider } from "mobx-react";
import FlowStore from "./stores/FlowStore";
import QuillService from "./services/QuillService";
import { CssBaseline } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";
import UserStore from "@/stores/UserStore";
import firebaseConfig from "../firebaseConfig.json";

const flowStore = new FlowStore();
const quill = new QuillService();
const userStore = new UserStore();

const stores = {
    flowStore,
    userStore,
    quill
}

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
    if (user) userStore.setUser(user);
    else userStore.removeUser();
});

ReactDOM.render(
    <Provider {...stores}>
        <CssBaseline />
        <App />
    </Provider>
    , document.getElementById("root"));

serviceWorker.unregister();