import React from 'react';
import SpotifyPlayer from 'react-spotify-player';


export default (props) =>{

  return(
    <div>
      <SpotifyPlayer
          uri={props.previewUrl}
        />
    </div>
  )
}
