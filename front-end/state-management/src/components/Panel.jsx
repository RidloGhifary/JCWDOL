import { useState } from "react";

const Panel = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ border: "1px solid", padding: "16px", marginTop: "10px" }}>
      <h2>Item title</h2>
      {isActive && (
        <p style={{ margin: "12px 0" }}>
          Generate Lorem Ipsum placeholder text for use in your graphic, print
          and web layouts, and discover plugins for your favorite writing,
          design and blogging tools
        </p>
      )}
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Panel;
