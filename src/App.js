import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';
import Act5 from './acts/act5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pages: [ Act5.pages._init ] };
  }

  render() {
    const pages = this.state.pages.map(p => {
      return <Page page={p} />
    });

    return (
      <div>
        {pages}
      </div>
    );
  }
}

export default App;
