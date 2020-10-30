import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Note = new Schema({
    title:{type: String},
    text:{type:String},
    color: {type:String},
    createAt:{type:Date},
    id:{type:Number}
});

mongoose.model('Note', Note);