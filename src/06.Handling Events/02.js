import React from "react"
import ReactDOM from "react-dom"

class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        );
    }
}

export default class Main {
    constructor() {
        ReactDOM.render(
            <LoggingButton />,
            document.getElementById('root')
        );
    }
}