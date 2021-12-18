import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes: []
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setNote: (state, action) => {
            state.notes = action.payload // action.payload []
        },
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload] // action.payload {id:0, note:""}
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload) // action.payload id
        },
        updateNote: (state, action) => {
            state.notes = [action.payload, ...state.notes.filter(note=>note.id !== action.payload.id)]
        }
    }
});

export const {
    setNote,
    addNote,
    deleteNote
} = notesSlice.actions
export default notesSlice.reducer