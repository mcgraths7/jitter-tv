import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getOneStream, deleteStream } from '../../actions/streamActions';
import Modal from '../layout/Modal';

const StreamDelete = ({ match, getOneStream, deleteStream, currentUserId }) => {
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

  const handleDelete = async () => {
    await deleteStream(selectedStream.id);
    history.push('/dashboard');
  };

  const handleCancel = () => {
    history.push('/dashboard');
  };

  const actions = (
    <>
      <button
        onClick={handleDelete}
        type="button"
        className="ui button negative"
      >
        Delete
      </button>
      <button
        onClick={handleCancel}
        type="button"
        className="ui button secondary"
      >
        Cancel
      </button>
    </>
  );

  const history = useHistory();

  if (
    selectedStream &&
    currentUserId &&
    selectedStream.userId !== currentUserId
  ) {
    return <div>Not authorized to view this page</div>;
  } else if (selectedStream) {
    return (
      <Modal
        title={selectedStream.streamTitle}
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/dashboard')}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = (state) => ({
  currentUserId: state.auth.userId,
});

export default connect(mapStateToProps, { getOneStream, deleteStream })(
  StreamDelete,
);
