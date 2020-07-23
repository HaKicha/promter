import Quill from 'quill';

export default class QuillService {

    quill;

    constructor() {
        this.init = this.init.bind(this);
    }
    
    init(containerId) {
        this.quill = new Quill(containerId, {
            placeholder: 'Write your text here...',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ color: [] }, { background: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ size: [] }],
                    [{ align: [] }],
                    ['clean']
                ]
            },
            theme: 'snow'
        });
    }

    get data() {
        return this.quill.root.innerHTML;
    }

}

