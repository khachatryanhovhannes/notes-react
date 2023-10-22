import { action, makeObservable, observable } from "mobx";
import { INote } from "../types/types";


class NoteStore {
    addModal = false;
    singleNote!: INote;
    editedNote!: INote;
    notes: INote[] = [
        {
            id: 0,
            title: "Learn Js",
            description: "Welcome to the learn-js.org interactive JavaScript tutorial. Welcome to the learn-js.org interactive JavaScript tutorial. Welcome to the learn-js.org interactive JavaScript tutorial. Welcome to the learn-js.org interactive JavaScript tutorial.",
            addDate: new Date(),
        },
        {
            id: 1,
            title: "Learn TS",
            description: "TypeScript is JavaScript with added syntax for types. TypeScript is JavaScript with added syntax for types. TypeScript is JavaScript with added syntax for types. TypeScript is JavaScript with added syntax for types. TypeScript is JavaScript with added syntax for types.",
            addDate: new Date(),
        },
        {
            id: 2,
            title: "Learn Mobx",
            description: "In this tutorial, we are going to learn about Mobx which is an easier and simpler alternative to Redux (at least in my opinion). In this tutorial, we are going to learn about Mobx which is an easier and simpler alternative to Redux (at least in my opinion).",
            addDate: new Date(),
        },
        {
            id: 3,
            title: "Learn React",
            description: "React (sometimes spelled React.js or ReactJS) is one of the most popular JavaScript libraries to develop powerful, interactive web applications. You’ll learn how to start with React and build up to dynamic user interfaces. You’ll work with React specific concepts like: JSX, components, state, props, hooks, and more. Take this course to gain an edge as a front-end or full-stack web developer.",
            addDate: new Date(),
        },
        {
            id: 4,
            title: "Learn Redux",
            description: "The Redux docs are intended to teach the basic concepts of Redux, as well as explain key concepts for use in real-world applications. However, the docs can't cover everything. Happily, there are many other great resources available for learning Redux. We encourage you to check them out. Many of them cover topics that are beyond the scope of the docs, or describe the same topics in other ways that may work better for your learning style.",
            addDate: new Date(),
        },
    ]

    constructor() {
        makeObservable(this, {
            notes: observable,
            addModal: observable,
            showAddModal: action,
            addNewNote: action,
            setSingleNote: action,
            removeNote: action,
            setEditNote: action,
            editNote:action
        })
    }

    showAddModal(): void {
        this.addModal = !this.addModal;
    }

    addNewNote(newNote: INote): void {
        this.notes.push(newNote)
    }

    setSingleNote(pSingleNote: INote): void {
        this.singleNote = pSingleNote;
    }

    removeNote(pNote: INote) {
        this.notes = this.notes.filter(note => note !== pNote)
    }

    setEditNote(pNote: INote) {
        this.editedNote = pNote;
    }

    editNote(pNote: INote) {
        const index = this.notes.findIndex(note => note.id === pNote.id);
        this.notes[index] = pNote;
    }
}


export const store = new NoteStore()