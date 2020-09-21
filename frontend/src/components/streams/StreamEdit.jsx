import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getOneStream, editStream } from '../../actions/streamActions';
import StreamForm from './StreamForm';

const StreamEdit = ({ match, getOneStream, editStream, currentUserId }) => {
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

  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const onSubmit = async (formValues) => {
    const response = await editStream(formValues, match.params.streamId);
    if (response === true) {
      setRedirectToDashboard(true);
    }
  };

  if (redirectToDashboard) {
    return <Redirect to="/dashboard" />;
  }
  const { streamId } = match.params;

  if (selectedStream && selectedStream.userId !== currentUserId) {
    return 'Not authorized to view this page';
  } else if (selectedStream) {
    const { streamTitle, streamCategory, streamDescription } = selectedStream;
    return (
      <StreamForm
        onSubmit={onSubmit}
        initialValues={{ streamTitle, streamCategory, streamDescription }}
        submitText="Save Changes"
      />
    );
  }
  return <div>{`Could not find stream with ID of ${streamId}`}</div>;
};

const mapStateToProps = (state) => ({
  currentUserId: state.auth.userId,
});

export default connect(mapStateToProps, { getOneStream, editStream })(
  StreamEdit,
);
