import React from "react";

function CreateArea(props) {
  function handleChange(event) {
    const { name, value } = event.target;
    return props.setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleSubmit(event) {
    props.setNoteList([...props.notelist, props.input]);
    props.setInput({
      title: "",
      text: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={props.input.title}
        />
        <textarea
          onChange={handleChange}
          name="text"
          placeholder="Take a note..."
          rows="3"
          value={props.input.text}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
