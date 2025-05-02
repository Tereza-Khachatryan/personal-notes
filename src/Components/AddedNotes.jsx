import Note from "./Note"
import "../Styles/addedNotes.scss"

function AddedNotes ({ notes, setNotes }){

    function deleteNote(id){
        const filteredNotes = notes.filter((note) => note.id !== id)
        setNotes(filteredNotes)
        localStorage.setItem('notes', JSON.stringify(filteredNotes))
    }

    return (
        <div className="added-notes">
                {notes.map((note) => 
                        <Note key={note.id} note={note} deleteNote={deleteNote}/>
                )}
        </div>
    )
}

export default AddedNotes