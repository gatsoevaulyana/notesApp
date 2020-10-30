import React from 'react';

import './Note.less';

class Note extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = { backgroundColor: this.props.color };
        return (
            <div className="Note" style={style}>
                <span className="Note__del-icon" onClick={() => this.props.onDelete(this.props.id)}>x</span>
                {
                    this.props.title
                        ?
                        <h4>{this.props.title}</h4>
                        :
                        null
                }
                <div className="Note__text">{this.props.children}</div>
            </div>
        );
    }
}

export default Note;