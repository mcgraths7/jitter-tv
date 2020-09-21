import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteStream, getAllStreams } from '../../actions/streamActions';

class StreamDashboard extends React.Component {
  onDeleteButtonClicked = (streamId) => {
    //
  };

  renderButtons = (stream) => {
    return (
      <div className="right floated content">
        <Link to={`/streams/${stream.id}/edit`}>
          <button className="ui button primary">Edit</button>
        </Link>
        <Link to={`/streams/${stream.id}/delete`}>
          <button className="ui button negative">Delete</button>
        </Link>
      </div>
    );
  };

  renderList = () => {
    const { streams, currentUserId } = this.props;
    // console.log(usersStreams);
    const usersStreams = streams.filter(
      (stream) => stream.userId === currentUserId,
    );
    return usersStreams.map((stream) => (
      <div className="item" key={stream.id}>
        {this.renderButtons(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.streamTitle}
          <div className="description">{stream.streamDescription}</div>
        </div>
      </div>
    ));
  };

  render() {
    return <div className="ui celled list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.auth.userId,
  streams: Object.values(state.streams),
});

export default connect(mapStateToProps, { deleteStream })(StreamDashboard);
