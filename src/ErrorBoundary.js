import React, { Component } from 'react'; // Import React and Component class

class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null }; // State to store error information

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state when an error occurs
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo }); // Capture the error details
    console.log(error, errorInfo); // Optionally log the error details
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2> {/* Fallback UI */}
        </div>
      );
    }
    return this.props.children; // Render the normal content if no error
  }
}

export default ErrorBoundary; // Export the component
