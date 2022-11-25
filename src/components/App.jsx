import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiterm) => {
          return (
            <Entry
              key={emojiterm.id}
              emoji={emojiterm.emoji}
              name={emojiterm.name}
              description={emojiterm.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
