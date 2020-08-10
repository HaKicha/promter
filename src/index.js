import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import { Provider } from "mobx-react";
import FlowStore from "./stores/FlowStore";
import QuillService from "./services/Quill/QuillService";
import { CssBaseline } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";
import UserStore from "@/stores/UserStore";
import firebaseConfig from "../firebaseConfig.json";
import UiStore from "@/stores/UiStore";

const flowStore = new FlowStore();
const quill = new QuillService();
const userStore = new UserStore();
const uiStore = new UiStore();

const stores = {
    flowStore,
    userStore,
    uiStore,
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