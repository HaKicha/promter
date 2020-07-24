import {action, observable} from "mobx";

export default class UserStore {

    @observable user = null;

    @action
    setUser(user) {
        this.user = user;
    }

    @action
    removeUser() {
        this.user = null;
    }

}