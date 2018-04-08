import React from "react";
import ReactDOM from "react-dom";

export default class Main {
    constructor() {
        ReactDOM.render(
            <h1>Hello, world!</h1>,
            document.getElementById('root')
          );
    }
}