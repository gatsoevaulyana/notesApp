import React from 'react';
import Masonry from 'react-masonry-component';
import './NotesGrid.less';
import './Note.jsx';
import Note from "./Note.jsx";

const masonryOptions = {
    itemSelector: '.Note',
    columnWidth: 250,
    gutter: 10,
    isFitWidth: true,
};

class NotesGrid extends React.Component {
    render() {

        return (
            <Masonry
                className='NotesGrid'
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete.bind(null, note)} //err
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
}

export default NotesGrid;