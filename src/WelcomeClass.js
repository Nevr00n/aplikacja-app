import React, {Component} from "react";

class WelcomeClass extends React.Component{
    render() {
      return <h1>Cześć, {this.props.name} {this.props.surName}</h1>;
    }
  }

  export default WelcomeClass;
