import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getOneStream } from '../../actions/streamActions';

const StreamShow = ({ match, getOneStream }) => {
  const [selectedStream, setSelectedStream] = useState(null);
  useEffect(() => {
    const streamId = match.params.streamId;
    const getStream = async () => {
      const response = await getOneStream(streamId);
      if (response) {
        setSelectedStream(response);
      }
    };
    getStream();
  }, [getOneStream, match.params.streamId]);
  const { streamId } = match.params;
  if (selectedStream) {
    return <div>{`Viewing ${selectedStream.streamTitle}`}</div>;
  }
  return <div>{`Could not find stream with ID of ${streamId}`}</div>;
};

export default connect(null, { getOneStream })(StreamShow);
