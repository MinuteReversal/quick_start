import React from "react";
import ReactDOM from "react-dom";



class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.toggleClick=this.toggleClick.bind(this);
        this.state={isLoggedIn:false};
    }
    toggleClick(){
        this.setState(prevState=>({isLoggedIn:!prevState.isLoggedIn}));
    }
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        return (
            <div onClick={this.toggleClick}>
                The user is <b>{isLoggedIn ? 'currently':'not'}</b> loged in.
            </div>
        );
    }
}

export default class Main{
    constructor(){
        ReactDOM.render(
            <LoginControl />,
            document.getElementById('root')
        );
    }
}