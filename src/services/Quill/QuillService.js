import Quill from 'quill';
import './extensions/qpoint';
import './extensions/paragraph';

export default class QuillService {

    quill;

    constructor() {
        this.init = this.init.bind(this);
    }


    init(containerId) {
        const HrHandler = () => {
            let range = this.quill.getSelection();
            if (range) this.quill.insertEmbed(range.index,"hr", () => {})
            //don't touch!
            this.quill.setContents(this.quill.getContents().filter(el => el.insert !==`
`));
            this.quill.blur();
        }
        const ParagraphHandler = () => {
            this.quill.insertEmbed(this.quill.getLength(),"paragraph", () => {})
            //don't touch!
            this.quill.setContents(this.quill.getContents().filter(el => el.insert !==`
`));
            this.quill.blur()
        }

        this.quill = new Quill(containerId, {
            placeholder: 'Write your text here...',
            modules: {
                toolbar: {
                    container: '.ql-toolbar',
                    handlers: {
                        hr: HrHandler,
                        paragraph: ParagraphHandler
                    }
                }
                //[
                //     ['bold', 'italic', 'underline'],
                //     [{ color: [] }, { background: [] }],
                //     [{ list: 'ordered' }, { list: 'bullet' }],
                //     [{ align: [] }],
                //     ['clean']
                // ]
            },
            theme: 'snow'
        });
        this.quill.on('text-change', () => {

        })
    }

    get data() {
        return this.quill.root.innerHTML;
    }

}
