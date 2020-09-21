import React from 'react';
import { connect } from 'react-redux';

import { getAllStreams } from '../../actions/streamActions';

class StreamList extends React.Component {
  componentDidMount() {
    const { getAllStreams } = this.props;
    getAllStreams();
  }

  renderStreams = () => {
    const { streams } = this.props;
    return streams.map((stream) => (
      <div key={stream.id} className="ui card">
        <div className="content">
          <div className="header">{stream.streamTitle}</div>
          <div className="small">{stream.userId}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">{stream.streamCategory}</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">{stream.streamDescription}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return <div className="ui cards">{this.renderStreams()}</div>;
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  userId: state.auth.userId,
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { getAllStreams })(StreamList);
