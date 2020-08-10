import React from 'react';

export default function Toolbar() {
    return (
        <div className="ql-toolbar ql-snow">
            <span className="ql-formats">
                <button type="button" className="ql-bold"></button>
                <button type="button" className="ql-italic"></button>
                <button type="button" className="ql-underline"></button>
            </span>
            <span className="ql-formats">
                <button type="button" className="ql-hr">Q</button>
                <button type="button" className="ql-paragraph">P</button>
            </span>
        </div>
    )
}