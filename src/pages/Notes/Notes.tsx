import { observer } from "mobx-react"
import { store } from "../../mobx/notesStore"
import AddModal from "../../components/AddModal/AddModal"
import classes from './Notes.module.css'
import SingleNote from "../../components/SingleNote/SingleNote"
import { useState } from "react"
import EditModal from "../../components/EditModal/EditModal"

const Notes = observer(() => {
    const [showSingleNote, setShowsingleNote] = useState(false)
    const [showEditNote, setShowEditNote] = useState(false)

    const handleShowSingleNote = () => {
        setShowsingleNote(!showSingleNote)
    }
    const handleShowEditModal = () => {
        setShowEditNote(!showEditNote)
    }

    return <>
        <button
            className={classes.addButton}
            onClick={() => {
                store.showAddModal()
            }}>Add Note</button>

        <div className={classes.notes}>
            {
                store.notes.map(note => {
                    return <div key={note.id}
                        className={classes.note}
                        onClick={() => {
                            store.setSingleNote(note)
                            handleShowSingleNote()
                        }}
                    >
                        <h1>{note.title}</h1>
                        <p>{note.description.substring(0, 100)}</p>
                    </div>
                })
            }

        </div>
        {store.addModal && <AddModal />}
        {showSingleNote && <SingleNote
            handleShowSingleNote={handleShowSingleNote}
            handleShowEditModal={handleShowEditModal} />}
        {showEditNote && <EditModal handleShowEditModal={handleShowEditModal} />}
    </>
})

export default Notes