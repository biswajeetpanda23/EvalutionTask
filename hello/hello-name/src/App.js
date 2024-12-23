// App.js
import React from 'react';
import Greeting from './components/Greeting'; // Import the Greeting component

function App() {
  // Here, we render the Greeting component with the name "John"
  return (
    <div>
      <Greeting name="John" />  {/* Pass "John" as the name prop */}
      <Greeting name="Alice" /> {/* Pass "Alice" as the name prop */}
    </div>
  );
}

export default App;
