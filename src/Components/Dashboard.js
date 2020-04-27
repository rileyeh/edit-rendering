import React, { Component } from 'react'
import View from './View'

//just defining a songs array because there is no back end
const songs = [
    {
        id: 1,
        artist: 'one',
        title: 'first'
    },
    {
        id: 2,
        artist: 'two',
        title: 'second'
    },
    {
        id: 3,
        artist: 'three',
        title: 'third'
    }
]

class Dashboard extends Component {
    constructor(props) {
        super(props)

        //this is also because of the no back end thing, the whole songs: songs thing
        this.state = {
            songs: songs
        }
    }

    render() {
        const mappedSongs = this.state.songs.map(song => {
            return (
                <div key={song.id}>
                    <View song={song}/>
                </div>
            )
        })
        return (
            <div>
                <h1>dashboard</h1>
                {mappedSongs}
            </div>
        )
    }
}

export default Dashboard
