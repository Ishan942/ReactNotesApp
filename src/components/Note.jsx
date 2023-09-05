import React from "react";

function Note(props) {
  function handleDelete() {
    props.deleteNote(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
