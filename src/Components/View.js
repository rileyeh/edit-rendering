import React, { Component } from 'react'
import EditSong from './EditSong'

//obviously your View component has more ternaries, but you could nest one like this in one of your existing ones

//changed this into a class because it's the one that needs to keep track of the state of edit. when it was in dashboard, when you clicked an edit button, an EditSong component would open for every song instead of just the one that you clicked
class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        let {edit} = this.state 
        this.setState({edit:!edit})
    }

    render() {
        let {artist, title} = this.props.song
        return (
            <div>
                <h1>View</h1>
                <p>artist: {artist}</p>
                <p>title: {title}</p>
                {
                    this.state.edit
                    ?
                    <EditSong 
                        toggleEdit={this.toggleEdit}
                        song={this.props.song}/>
                    :
                    <button onClick={() => this.toggleEdit()}>edit</button>
                }
            </div>
        )
    }
}

export default View