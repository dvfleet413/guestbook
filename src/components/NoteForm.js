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

    render(){
        return(
            <form className="note-form" onSubmit={(e) => this.props.handleSubmit(e)}>
                <label>From: <input type="text" name="author" value={this.state.author} onChange={this.handleChange} /></label>
                <label>Location: <input type="text" name="location" value={this.state.location} onChange={this.handleChange} /></label>
                <label>Note: <input type="text" name="content" value={this.state.content} onChange={this.handleChange} /></label>
                <input type="submit" value="Send Note" />
            </form>
        )
    }
}