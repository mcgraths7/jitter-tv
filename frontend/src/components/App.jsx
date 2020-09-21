import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamDashboard from './streams/StreamDashboard';
import Header from './layout/Header';

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route exact path="/" component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/:streamId/edit" component={StreamEdit} />
        <Route path="/streams/:streamId/delete" component={StreamDelete} />
        <Route path="/streams/:streamId" component={StreamShow} />
        <Route path="/dashboard" component={StreamDashboard} />
      </Switch>
    </div>
  );
};

export default App;
