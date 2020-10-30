import React from 'react';
import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import NotesStore from '../store/AppStore'
import NotesActions from '../actions/NotesAction'
import './App.less';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();

    }
    componentWillMount() {
        NotesActions.loadNotes()
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState( getStateFromFlux() );
    }
    handleNoteAdd(data) {
        NotesActions.createNote(data);
    }
    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }
    render() {
        return( <div className='App'>
            <h2 className='App_header'>NotesApp</h2>
            <NoteEditor onNoteAdd={this.handleNoteAdd}/>
            <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
        </div>
        );
    }
}

export default App;