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

    addNote = (note) => {
        this.setState(prevState => {
            return {
                notes: [...prevState.notes, note]
            }
        })
    }    

    render(){
        const notes = this.state.notes.map(note => <Note note={note} />)
        return(
            <div>
                <NoteForm addNote={this.addNote}/>
                {notes}
            </div>
        )
    }
}