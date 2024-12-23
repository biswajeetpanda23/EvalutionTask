// Greeting.js
import React from 'react';

// Functional component that takes 'name' as a prop
function Greeting({ name }) {
  // This returns JSX to render the message
  return <h1>Hello, {name}!</h1>;
}

// Export the component so it can be used in other files
export default Greeting;
