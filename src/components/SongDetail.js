import React from 'react';

const SongDetail = props => {
  if(!props.song) return null;
  return <h3>{props.song.title.label}</h3>

}

export default SongDetail
