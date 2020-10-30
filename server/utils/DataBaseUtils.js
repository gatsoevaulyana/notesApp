import mongoose from 'mongoose';

import { db } from '../../etc/config.json';
import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`, { useNewUrlParser: true , useUnifiedTopology: true});
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date(),
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.deleteOne({_id: id});
}