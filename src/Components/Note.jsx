function Note({ note, deleteNote }){
    return(
        <div className="note">
            <div className="note-list">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
            </div>
            <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
    )
}

export default Note