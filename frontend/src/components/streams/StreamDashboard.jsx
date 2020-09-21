import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllStreams } from '../../actions/streamActions';

const StreamDashboard = ({ getAllStreams, currentUserId }) => {
  const [userStreams, setUserStreams] = useState(null);
  useEffect(() => {
    const getUserStreams = async () => {
      const response = await getAllStreams();
      setUserStreams(
        response.filter((stream) => stream.userId === currentUserId),
      );
    };
    getUserStreams();
  }, [currentUserId, getAllStreams]);

  const renderButtons = (stream) => {
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

  const renderList = () => {
    if (userStreams) {
      return userStreams.map((stream) => (
        <div className="item" key={stream.id}>
          {renderButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.streamTitle}
            <div className="description">{stream.streamDescription}</div>
          </div>
        </div>
      ));
    }
    return 'Could not load streams';
  };

  return <div className="ui celled list">{renderList()}</div>;
};

const mapStateToProps = (state) => ({
  currentUserId: state.auth.userId,
});

export default connect(mapStateToProps, { getAllStreams })(StreamDashboard);
