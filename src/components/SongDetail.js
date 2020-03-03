import React from 'react';

const SongDetail = props => {
  if(!props.song) return null;
  return (
    <article>
      <h3>{props.song.title.label}</h3>
      <a href={props.song.id.label}><p>Buy Song on iTunes</p></a>
      <p>Genre: {props.song.category.attributes.term}</p>
      <p>Release Date: {props.song['im:releaseDate'].attributes.label}</p>
      <p>Price: {props.song['im:price'].label}</p>
    </article>

  )

}

export default SongDetail
