import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createStream } from '../../actions/streamActions';
import StreamForm from './StreamForm';

const StreamCreate = ({ createStream, currentUserId }) => {
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const onSubmit = async (formValues) => {
    const response = await createStream(formValues, currentUserId);
    if (response === true) {
      setRedirectToDashboard(true);
    }
  };

  if (redirectToDashboard) {
    return <Redirect to="/dashboard" />;
  }

  return <StreamForm onSubmit={onSubmit} submitText="Create Stream" />;
};

export default connect(null, { createStream })(StreamCreate);
