import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { store } from '../../mobx/notesStore';
import { IEditTaskProps } from '../../types/types';
import classes from './EditModal.module.css'


const EditModal = observer(({handleShowEditModal}: IEditTaskProps) => {

    const [edetedNote, setEdetedNote] = useState(store.editedNote)


    const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setEdetedNote({
            ...edetedNote,
            title: e.currentTarget.value
        })
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEdetedNote({
            ...edetedNote,
            description: e.currentTarget.value
        })
    }

    const handleSubmitNote = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        store.editNote(edetedNote)
        store.setSingleNote(edetedNote)
        handleShowEditModal()

    }

    return (
        <div className={classes.editModalBack} onClick={() => {
            handleShowEditModal()
        }}>
            <div className={classes.editModal} onClick={(e) => e.stopPropagation()}>
                <div className={classes.closeButton}>
                    <AiOutlineClose className={classes.closeIcon} onClick={() => {
                        handleShowEditModal()
                    }} />
                </div>
                <form>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input type="text"
                            id='title'
                            value={edetedNote.title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <textarea
                            id='description'
                            value={edetedNote.description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                    <input type="submit" 
                    value='Edit Note' 
                    onClick={handleSubmitNote}  
                    />
                </form>
            </div>

        </div>
    )

})

export default EditModal