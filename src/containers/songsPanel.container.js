import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Song from './../components/song.component';
import Slider from 'react-slick';
import {clearSong} from './../actions/index';

class SongList extends Component{

  renderSlider(){
    const settings = {
      className: "text-center",
      infinite: true,
      swipeToSlide: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true
    };

    return (
      <div className="containerSlider">
        <Slider {...settings}>
          {this.props.songs.map((songs)=>{
            return songs.map((song)=>{
              return(
                <div >
                  <Song songName={song.name} songArtist={song.artists[0].name}
                    songAlbum={song.album.name} coverUrl={song.album.images[1].url}
                    previewUrl={song.uri} />
                </div>
              )
            })
          })}
        </Slider>
      </div>
    );
  }

  render(){
    if(this.props.songs.length == 0){

      return(
        <div style={{marginTop: '5%'}} className="img-responsive text-center">
          <div className="row">
            <img src="http://www.freeiconspng.com/uploads/search-icon-png-18.png" height="200" width="200"/>

          </div>
          <div className="row" style={{marginTop: '3%'}}>
            <span className="textHeader">Find your favorite music</span>
          </div>
        </div>
      )
    }
    return(
      <div style={{marginTop: '1%'}}>
        {this.renderSlider()}
        <button className="btn btn-primary center-block" onClick={this.props.clearSong} >Close</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {songs:state.search_song};
}

export default connect(mapStateToProps, {clearSong})(SongList);
