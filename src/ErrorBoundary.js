import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // trackjs error tracking services for js or use Sentry
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. Oh no!
          <Link to="/">Click here</Link> to go back ot the homepage or wait 5
          seconds and we'll do it for you.
        </h2>
      );
    }
    return this.props.children; // we want to render whatever component - whatever is encapsulated by the ErrorBoundary tag
  }
}

export default ErrorBoundary;
