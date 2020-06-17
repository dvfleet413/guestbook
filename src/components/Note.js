import React from 'react';

const Note = (props) => {
    return (
        <div className="note">
            <p>{props.note.content}</p>
            <p>{props.note.author} - {props.note.location}</p>
        </div>
    )
}

export default Note;