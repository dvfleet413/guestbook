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
        fetch("https://stawicki-guestbook-api.herokuapp.com/notes", configObj)
            .then(r => r.json())
            .then(note => {
                this.props.addNote(note)
                this.setState({
                    author: '',
                    location: '',
                    content: ''
                })
            })
            .catch(e => console.log(e))
    }

    render(){
        return(
            <form className="note-form" onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Leave a Note in the Guestbook</h3>
                <div className="input-row">
                    <label>From:</label><input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                </div>
                <div className="input-row">
                    <label>Location:</label><input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
                </div>
                <div className="input-row">
                    <label>Note:</label><textarea type="text" 
                                                  name="content" 
                                                  value={this.state.content} 
                                                  onChange={this.handleChange}
                                                  style={{width: '70%', height: '4em'}} />
                </div>
                <input type="submit" value="Send Note" className="btn btn-primary" />
            </form>
        )
    }
}