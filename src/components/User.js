import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>Function Component</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
