import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {searchSong} from './../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { song: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({song: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.searchSong(this.state.song);
    this.setState({song:''});
  }

  render(){
    return(
      <div>
        <div className="textHeader text-center" style={{marginBottom: '3%'}}>
          <h1>Spotify Songs Player</h1>
          <h3>Reactjs - Redux Sample by Julio Núñez Q</h3>
        </div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Search songs"
            className="form-control" value={this.state.song}
            onChange={this.onInputChange} required/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Search</button>
          </span>
        </form>
      </div>
    )
  }
}

export default connect(null,{searchSong})(SearchBar);
