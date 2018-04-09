import React from "react"
import ReactDOM from "react-dom"

class GetArgs extends React.Component {
    handleClick(args) {
        console.log('this is:', args);
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.handleClick(1, e)}>Get Pass Arguments</button>
                <button onClick={this.handleClick.bind(this, 2)}>Get Pass Arguments</button>
            </div>
        );
    }
}

export default class Main {
    constructor() {
        ReactDOM.render(
            <GetArgs />,
            document.getElementById('root')
        );
    }
}