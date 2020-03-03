import React, {Component} from 'react';
import SongSelect from '../components/SongSelect';
import SongDetail from '../components/SongDetail'

class SongBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      songs: [],
      selectedSongId: ''
    }

    this.handleSongSelected = this.handleSongSelected.bind(this)
  }

  handleSongSelected(id){
    this.setState({ selectedSongId: id})
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
        .then(result => {
         this.setState({
           songs: result.feed.entry
         })
      },
      error => {
        this.setState({
          error
        });
      })
  }

  getSelectedSong(){
    const selectedSong = this.state.songs.find(song => {
      return song.id.attributes['im:id'] === this.state.selectedSongId
    })
    return selectedSong
  }

  render(){
    return(
      <section>
        <h1>Top 20 Songs on iTunes</h1>
        <SongSelect
          songs={this.state.songs}
          onSongSelected={this.handleSongSelected}
        />
        <SongDetail song={this.getSelectedSong()} />
      </section>
    )
  }

}

export default SongBox;
