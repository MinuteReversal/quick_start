import React from "react";
import ReactDOM from "react-dom";

export default class Main {
    tick(){
        const element=(<div>
            <h1>Hello,world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>);
        ReactDOM.render(element,document.getElementById('root'));
    }
    constructor() {
        setInterval(this.tick,1000);
    }
}