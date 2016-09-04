import React, { Component } from 'react';
import SearchBar from './../containers/search_bar.container';
import SongList from './../containers/songsPanel.container';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SongList />
      </div>
    );
  }
}
