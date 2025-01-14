import React, { Component } from "react";

// this error exception use to trigger {in this case this try to catch error in CardList / in the children }error and instade of the error display the defined term

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Ooooops. thats is not good</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
