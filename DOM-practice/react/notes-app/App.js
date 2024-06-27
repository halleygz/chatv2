import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    /**
     * Challenge: Try to figure out a way to display only the 
     * first line of note.body as the note summary in the
     * sidebar.
     * 
     * Hint 1: note.body has "invisible" newline characters
     * in the text every time there's a new line shown. E.g.
     * the text in Note 1 is:
     * "# Note summary\n\nBeginning of the note"
     * 
     * Hint 2: See if you can split the string into an array
     * using the "\n" newline character as the divider
     */
    const [notes, setNotes] = React.useState(()=>JSON.parse(localStorage.getItem("notes")) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    function firstLine(){
        const firstLineText = notes.body.split("\n")
        return firstLineText
    }
    console.log(firstLine())
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    React.useEffect(()=>localStorage.setItem("notes", JSON.stringify(notes), [notes]))
    
    
    function updateNote(text) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }))
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
