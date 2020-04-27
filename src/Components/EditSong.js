import React, { Component } from 'react'

class EditSong extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artist: '',
            title: ''
        }
    }

    //by setting this in the compDidMount and setting the value of the respective input fields to 'value={this.state.artist}' and 'value={this.state.title}', the input fields will be auto-filled with the current info. this also means that if you change one and not the other, the correct information will still be sent to the backend.
    componentDidMount() {
        let {artist, title} = this.props.song
        this.setState({
            artist,
            title
        })
    }

    //this is to handle when the user types in the input fields, yours works as is, this is just how i write mine
    changeHandler = e => {
        let {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
        
    //in order for you to be able to npm start this, i commented out a chunk of this function, but that is how it would work if there was redux. so, in the real version, line 33 would be gone and 36-40 would be back in. 
    handleSubmit = e => {
        e.preventDefault()
        this.props.toggleEdit()

        //this editSong function is the one coming from redux in your project
        // let {artist, title} = this.state
        // this.props.editSong(this.props.id, {artist, title})
        //     .then(() => {
        //         this.props.toggleEdit()
        //     })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='artist'
                        value={this.state.artist}
                        onChange={this.changeHandler}/>
                    <input 
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.changeHandler}/>
                    <button>save</button>
                </form>
                <button onClick={() => this.props.toggleEdit()}>cancel</button>
            </div>
        )
    }
}

export default EditSong