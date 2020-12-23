import Component from './components.js'

export default class Input extends Component {

    render() {
        const {tag, content = '', ...attr} = this.props;

        let input = this.createElement(tag, attr);
        if (content) {
            for (const [key, value] of Object.entries(content)) {
                input.append(this.createElement(content, {value: value}, value));
            }
        }
        this.input = input
        return input
    }
    
}

