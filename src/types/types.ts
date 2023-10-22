export interface INote {
    id: number;
    title: string;
    description: string;
    addDate: Date;
}

export interface ISingleNoteProps {
    handleShowSingleNote: () => void;
    handleShowEditModal: () => void;
}

export interface IEditTaskProps {
    handleShowEditModal: () => void;
}