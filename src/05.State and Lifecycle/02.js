import React from "react"
import ReactDOM from "react-dom"

class Clock extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default class Main{
    tick(){
        ReactDOM.render(
            <Clock date={new Date()}/>,
            document.getElementById('root')
        );
    }
    constructor(){
        setInterval(this.tick,1000);
    }
}