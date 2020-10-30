import React from 'react';
import './NotesEditor.less';
import ColorPicker from "./ColorPicker.jsx";

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title:'',
            text:'',
            color: '#FFFFFF'};

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);

        }


    handleTextChange(event){
        this.setState({text: event.target.value})
    }
    handleColorChange(color){
        this.setState({color})
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: '#FFFFFF'
        });
    }


    render() {
        return(
            <div className={'NoteEditor'}>
                <input
                    type='text'
                    className='NoteEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    rows={5}
                    className='NoteEditor__text'
                    placeholder='Enter note text'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />

            <div className={'NoteEditor__footer'}>
                <ColorPicker
                    value = {this.state.color}
                    onChange = {this.handleColorChange}
            >
                </ColorPicker>
                <button
            className={'NoteEditor__button'}
            disabled={!this.state.text}
            onClick={this.handleNoteAdd}>
                Add
            </button>

            </div>

        </div>
    );
    }
}

export default NoteEditor;