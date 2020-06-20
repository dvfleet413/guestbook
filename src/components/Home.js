import React, { Component } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

export default class Home extends Component {
    state = {
        notes: []
    }

    componentDidMount(){
        fetch("https://stawicki-guestbook-api.herokuapp.com/notes")
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
                <h1>Jacqueline T. Stawicki</h1>
                <NoteForm addNote={this.addNote}/>
                {notes}
            </div>
        )
    }
}