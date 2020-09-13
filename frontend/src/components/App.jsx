import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './layout/Header';

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams" exact component={StreamShow} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
      </Router>
    </div>
  );
};

export default App;
