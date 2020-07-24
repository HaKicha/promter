import {observable, action, autorun, reaction, computed} from "mobx";

export default class FlowStore {

    @observable content = 'Write some text here...';
    @observable isMove = false;
    @observable speed = 160;
    intervalId = null;
    disposer = null;
    @observable color = '#ffffff'
    @observable background = '#000000'
    @observable fontSize = 50;
    @observable viewportWidth = 60;

    constructor() {
        this.disposer = autorun(() => {
            clearInterval(this.intervalId)
            if (this.isMove)
                this.intervalId = setInterval(() => window.scrollBy(0, 1), this.speed);
            else clearInterval(this.intervalId);
        })
    }

    @action
    setIsMove(val) {
        this.isMove = val;
    }

    @action
    setSpeed(speed) {
        this.speed = speed;
    }

    @computed
    get style() {
        return {
            color: this.color,
            background: this.background,
            fontSize: this.fontSize,
            maxWidth: this.viewportWidth + '%'
        }
    }

    @action
    setColor(color) {
        this.color = color;
    }

    @action
    setBackground(color) {
        this.background = color;
    }

    @action
    setFontSize(value) {
        this.fontSize = value;
    }

    @action
    setViewportWidth(value) {
        this.viewportWidth = value;
    }

    @action
    setContent(html) {
        this.content = html;
    }

}