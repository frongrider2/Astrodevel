import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TextTyping = () => {
  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <ReactTypingEffect
        className="text-typing"
        // cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        text={["👨‍🚀 Hello!!!", "I'm Fullstack Developer🚀"]}
      />
    </div>
  );
};

export default TextTyping;
