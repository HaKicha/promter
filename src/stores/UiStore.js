import { observable, action } from "mobx";

export default class UiStore {

    @observable isDrawerOpen;

    constructor() {
        this.isDrawerOpen = false;
    }

    @action.bound
    openDrawer() {
        this.isDrawerOpen = true;
    }

    @action.bound
    closeDrawer() {
        this.isDrawerOpen = false;
    }

}