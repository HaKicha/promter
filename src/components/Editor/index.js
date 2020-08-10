import React, { useEffect } from "react";
import { inject } from "mobx-react";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import './index.css';
import {Link} from "react-router-dom";
import Toolbar from "@/components/Editor/Toolbar";

const Editor = inject('quill', 'flowStore')(({ quill, flowStore}) => {

    useEffect(() => {
        quill.init('#editor');
        return () => document.getElementsByClassName('ql-toolbar')[0]?.remove();
    },[])

    function saveFLow() {
        flowStore.setContent(quill.data);
    }

    setTimeout(() => {

    }, 3000);

    return (
        <div>
            <Toolbar />
            <div id='editor' dangerouslySetInnerHTML={{ __html: flowStore.content }}/>
            <div className="editor-control">
                <button onClick={saveFLow}>Save</button>
                <Link to='/promter'>To promter</Link>
            </div>
        </div>
    )
})

export default Editor;