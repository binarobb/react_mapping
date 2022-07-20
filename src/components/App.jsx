import React from "react";
import Entry from "./Entry";
import emoji from "../emojipedia";

function createEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emoji.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
