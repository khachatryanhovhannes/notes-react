import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { store } from '../../mobx/notesStore';
import classes from './AddModal.module.css'


const AddModal = observer(() => {
    const [newNote, setNewNote] = useState({
        id: Math.random(),
        title: "",
        description: "",
        addDate: new Date(),
    })

    const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setNewNote({
            ...newNote,
            title: e.currentTarget.value
        })
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewNote({
            ...newNote,
            description: e.currentTarget.value
        })
    }

    const handleSubmitNote = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        store.addNewNote(newNote)
        store.showAddModal()

    }

    return (
        <div className={classes.addModalBack} onClick={() => {
            store.showAddModal()
        }}>
            <div className={classes.addModal} onClick={(e) => e.stopPropagation()}>
                <div className={classes.closeButton}>
                    <AiOutlineClose className={classes.closeIcon} onClick={() => {
                        store.showAddModal()
                    }} />
                </div>
                <form>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input type="text"
                            id='title'
                            value={newNote.title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <textarea
                            id='description'
                            value={newNote.description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                    <input type="submit"
                        value='Add Note'
                        onClick={handleSubmitNote}
                    />
                </form>
            </div>

        </div>
    )

})

export default AddModal