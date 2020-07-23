import React from 'react';
import './index.css';
import { inject, observer} from "mobx-react";
import 'quill/dist/quill.core.css';

const TextContainer = inject('flowStore')(observer(({flowStore}) => {

    return (
        <div id='flow' className={'ql-editor'} style={flowStore.style} dangerouslySetInnerHTML={{ __html: flowStore.content }} />
    )
}))

export default TextContainer;