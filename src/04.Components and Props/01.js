import React from "react";
import ReactDOM from "react-dom";

//Functional Components
function Welcome1(props){
    return <h1>Hello, {props.name}</h1>;
}

//Class Components
class Welcome2 extends React.Component{
        render(){
            return <h1>Hello, {this.props.name}</h1>;
        }
}

export default class Main{
    constructor(){
        ReactDOM.render(<div><Welcome1 name="Sara"/><Welcome2 name="Sara"/></div>,document.getElementById("root"));
    }
}