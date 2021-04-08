import React, { useState, useEffect } from "react";
// useEffect run after every render
// it can be used as component did mount, componentdidupdate and component will unmount
function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect - Updating document title ");
    document.title = `You clicked ${count} times`;
  }, [count]);
  //   inside array we provide the state and props and when that changes useEffect gets run
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        useEffect - Click {count} times
      </button>
    </div>
  );
}

export default UseEffect;
