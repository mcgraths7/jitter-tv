import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllStreams } from '../../actions/streamActions';

const StreamList = ({ getAllStreams }) => {
  const [allStreams, setAllStreams] = useState(null);
  useEffect(() => {
    const getStreams = async () => {
      const response = await getAllStreams();
      if (response) {
        setAllStreams(response);
      }
    };
    getStreams();
  }, [getAllStreams]);

  const renderStreams = () => {
    if (allStreams) {
      return allStreams.map((stream) => (
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
    }
    return <div>Loading streams...</div>;
  };

  return <div className="ui cards">{renderStreams()}</div>;
};

export default connect(null, { getAllStreams })(StreamList);
