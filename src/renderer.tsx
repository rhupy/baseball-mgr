import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Baseball Manager</h1>
      <p>Welcome to the Baseball Manager application ok!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
