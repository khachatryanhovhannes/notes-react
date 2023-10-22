import classes from './SingleNote.module.css'
import { observer } from 'mobx-react'
import { store } from '../../mobx/notesStore'
import { ISingleNoteProps } from '../../types/types'

const SingleNote = observer(({ handleShowEditModal, handleShowSingleNote }: ISingleNoteProps) => {
    const { singleNote } = store;
    return (

        <div className={classes.singleNoteBack} onClick={() => {
            handleShowSingleNote()
        }}>
            {
                singleNote &&

                <div className={classes.singleNote} onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <h1>{singleNote.title}</h1>
                    <p>{singleNote.description}</p>
                    <div className={classes.controlButtons}>
                        <button className={classes.edit}
                            onClick={()=>{
                                store.setEditNote(singleNote)
                                handleShowEditModal()
                            }}
                        >Edit</button>
                        <button className={classes.close}
                            onClick={handleShowSingleNote}
                        >Close</button>
                        <button className={classes.remove}
                            onClick={() => {
                                store.removeNote(singleNote)
                                handleShowSingleNote()
                            }}
                        >Remove</button>
                    </div>
                </div>
            }
        </div>
    )
})

export default SingleNote