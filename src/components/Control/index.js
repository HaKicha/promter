import React from 'react';
import './index.css';
import { inject, observer } from "mobx-react";
import {Link} from "react-router-dom";

const Control = inject('flowStore')(observer(({ flowStore }) => {

    function toggle() {
        flowStore.setIsMove(!flowStore.isMove);
    }

    function handleChangeSpeed(e) {
        const speed = 200 - e.target.value;
        flowStore.setSpeed(speed);
    }

    function handleColorChange(e) {
        flowStore.setColor(e.target.value);
    }

    function handleBackgroundChange(e) {
        flowStore.setBackground(e.target.value);
    }

    function handleFontSizeChange(e) {
        flowStore.setFontSize(parseInt(e.target.value));
    }

    function handleViewportWidthChange(e) {
        flowStore.setViewportWidth(parseInt(e.target.value));
    }

    return (
        <div id='control'>
            <Link to={'/editor'}>Editor</Link>
            <button onClick={toggle}>
                {flowStore.isMove ? 'Pause' : 'Play'}
            </button>
            <label>
                <span>Speed </span>
                <input type="range" max={180} min={1} defaultValue={200 - flowStore.speed} onChange={handleChangeSpeed}/>
            </label>
            <label>
                <span>Color </span>
                <input type="color" onChange={handleColorChange} value={flowStore.style.color}/>
            </label>
            <label>
                <span>Background </span>
                <input type="color" onChange={handleBackgroundChange} value={flowStore.style.background}/>
            </label>
            <label>
                <span>Font size </span>
                <input type="number" min={10} max={100} step={1} className='font-size-input' defaultValue={flowStore.fontSize} onChange={handleFontSizeChange}/>
                <span> pixels </span>
            </label>
            <label>
                <span>Width </span>
                <input type="range" max={100} min={10} defaultValue={flowStore.viewportWidth} onChange={handleViewportWidthChange}/>
            </label>
        </div>
    )
}));

export default Control;