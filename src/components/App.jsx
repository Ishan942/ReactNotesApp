import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = useState({
    title: "",
    text: "",
  });
  const [notelist, setNoteList] = useState([]);
  function deleteNote(id) {
    setNoteList((prevNoteList) => {
      return prevNoteList.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        input={input}
        setInput={setInput}
        setNoteList={setNoteList}
        notelist={notelist}
      />
      {notelist.map((currNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            deleteNote={deleteNote}
            title={currNote.title}
            text={currNote.text}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
