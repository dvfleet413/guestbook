import React, { Component } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

export default class Home extends Component {
    state = {
        notes: []
    }

    componentDidMount(){
        fetch("http://localhost:8080/notes")
            .then(r => r.json())
            .then(notes => {
                this.setState({
                    notes: notes
                })
            })
    }

    addNote = () => {
        
    }    

    render(){
        const notes = this.state.notes.map(note => <Note note={note} />)
        return(
            <div>
                <NoteForm adNote={this.addNote}/>
                {notes}
            </div>
        )
    }
}