import React from "react";
import ReactDOM from "react-dom";

export default class Main {
    formatName(user) {
        return `${user.firstName} ${user.lastName}`;
    }
    constructor() {
          const user = {
            firstName: 'Harper',
            lastName: 'Perez'
          };
          
          const element = (
            <h1>
              Hello, {this.formatName(user)}!
            </h1>
          );
          
          ReactDOM.render(
            element,
            document.getElementById('root')
          );
    }
}