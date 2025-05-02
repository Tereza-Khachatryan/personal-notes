import React, { useState, useEffect } from "react";
import AddedNotes from "./AddedNotes";
import "../Styles/mainNote.scss";
import noteImg from "../assets/notes.png";

function MainNote() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", text: "" });

  function addNote() {
    if (newNote.title && newNote.text) {
      const newId = Date.now().toString();
      setNotes([{ ...newNote, id: newId }, ...notes]);
      setNewNote({ title: "", text: "" });
    }
  }

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    try {
      if (savedNotes) {
        const parsedNotes = JSON.parse(savedNotes);
        if (Array.isArray(parsedNotes)) {
          setNotes(parsedNotes);
        }
      }
    } catch (error) {
      console.log("Error loading notes:", error.message);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <div className="notePage">
      <div className="note-input">
        <h2>Add Note</h2>
        <input
          id="note-title"
          type="text"
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          placeholder="Enter note title..."
          value={newNote.title}
        />
        <textarea
          rows="4"
          cols="50"
          id="note-text"
          placeholder="Enter note text..."
          value={newNote.text}
          onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
        />
        <button className="add-btn" onClick={addNote}>
          Add note
        </button>
      </div>
      <div className="note-header">
        <img src={noteImg} alt="Notes" />
        <h3>Notes</h3>
      </div>
      <AddedNotes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default MainNote;
