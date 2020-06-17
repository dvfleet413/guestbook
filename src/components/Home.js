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

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render(){
        const notes = this.state.notes.map(note => <Note note={note} />)
        return(
            <div>
                <NoteForm handleSubmit={this.handleSubmit}/>
                {notes}
            </div>
        )
    }
}