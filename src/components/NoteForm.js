import React, { Component } from 'react';

export default class NoteForm extends Component {
    state = {
        author: '',
        location: '',
        content: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({note: this.state})
        }
        fetch("http://localhost:8080/notes", configObj)
            .then(r => r.json())
            .then(note => {
                this.props.addNote(note)
            })
            .catch(e => console.log(e))
    }

    render(){
        return(
            <form className="note-form" onSubmit={(e) => this.handleSubmit(e)}>
                <label>From: <input type="text" name="author" value={this.state.author} onChange={this.handleChange} /></label>
                <label>Location: <input type="text" name="location" value={this.state.location} onChange={this.handleChange} /></label>
                <label>Note: <input type="text" name="content" value={this.state.content} onChange={this.handleChange} /></label>
                <input type="submit" value="Send Note" />
            </form>
        )
    }
}