import React from "react";
import ReactDOM from "react-dom";

function UserGreeting(prpos){
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>;
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default class Main{
    constructor(){
        ReactDOM.render(
            <Greeting isLoggedIn={false}/>,
            document.getElementById('root')
        );
    }
}