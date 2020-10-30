import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constatnts/AppConstatnts';

import api from '../api';

const NoteActions = {
    loadNotes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listNotes()
            .then(({data}) => {
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_SUCCESS,
                    notes: data
                })
            })
            .catch(error => {
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_FAIL,
                    error
                })
            });
    },

    createNote(note) {
        api.createNote(note)
            .then(() => {
                this.loadNotes()
            })
            .catch(error => {
                console.error(error);
            });
    },

    deleteNote(noteId) {
        api.deleteNote(noteId)
            .then(() => {
                this.loadNotes()
            })
            .catch(error => {
                console.error(error);
            });
    }
};

export default NoteActions;