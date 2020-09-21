import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getOneStream } from '../../actions/streamActions';

const StreamDelete = ({ match, getOneStream, currentUserId }) => {
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
  if (selectedStream && selectedStream.userId !== currentUserId) {
    return 'Not authorized to view this page';
  } else if (selectedStream) {
    return <div>{`Deleting ${selectedStream.streamTitle}`}</div>;
  }
  return <div>{`Could not find stream with ID of ${streamId}`}</div>;
};

const mapStateToProps = (state) => ({
  currentUserId: state.auth.userId,
});

export default connect(mapStateToProps, { getOneStream })(StreamDelete);
