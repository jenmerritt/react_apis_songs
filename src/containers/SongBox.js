import React, {Component} from 'react';
import SongSelect from '../components/SongSelect';
import SongDetail from '../components/SongDetail';

class SongBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      songs: [],
      selectedSongId: ''
    }
  }
  render(){
    return(
      null
    )
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
        .then(result => {
         this.setState({
           songs: result.feed.entry
         })
      })
  }

}

export default SongBox;
