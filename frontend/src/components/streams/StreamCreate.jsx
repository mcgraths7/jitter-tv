import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = ({ handleSubmit }) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">{error}</div>
      );
    }
    return null;
  };

  const renderTextArea = ({
    input, label, id, meta,
  }) => {
    const classList = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={classList}>
        <label htmlFor={id} className="ui label">{label}</label>
        <textarea
          id={id}
          className="ui textarea"
          onBlur={input.onBlur}
          onChange={input.onChange}
          onFocus={input.onFocus}
          value={input.value}
        />
        {renderError(meta)}
      </div>
    );
  };

  const renderSelect = ({
    input, label, id, meta,
  }) => {
    const classList = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={classList}>
        <label htmlFor={id} className="ui label">{label}</label>
        <select
          id={id}
          className="ui select"
          onBlur={input.onBlur}
          onChange={input.onChange}
          onFocus={input.onFocus}
          value={input.value}
        >
          <option value="">Choose a category...</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="fps">FPS</option>
          <option value="sports">Sports</option>
          <option value="casual">Casual</option>
          <option value="rpg">RPG</option>
          <option value="mmorpg">MMORPG</option>
          <option value="strategy">Strategy</option>
          <option value="driving-racing">Driving / Racing</option>
          <option value="fighting">Fighting</option>
          <option value="moba">MOBA</option>
          <option value="battle-royale">Battle Royale</option>
          <option value="roguelike">Roguelike</option>
          <option value="puzzle">Puzzle</option>
          <option value="platformer">Platformer</option>
          <option value="horror">Horror</option>
          <option value="simulation">Simulation</option>
          <option value="vr">VR</option>
        </select>
        {renderError(meta)}
      </div>
    );
  };

  const renderInput = ({
    input, label, id, meta,
  }) => {
    const classList = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={classList}>
        <label htmlFor="id" className="ui label">{label}</label>
        <input
          id={id}
          type="text"
          className="ui input"
          autoComplete="off"
          onBlur={input.onBlur}
          onChange={input.onChange}
          onFocus={input.onFocus}
          value={input.value}
        />
        {renderError(meta)}
      </div>
    );
  };

  return (
    <div className="ui middle aligned aligned grid">
      <div className="column">
        <form
          className="ui large form error"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="ui stacked segment">
            <Field
              name="streamTitle"
              component={renderInput}
              id="streamTitle"
              label="Stream Title"
            />
            <Field
              name="streamCategory"
              component={renderSelect}
              id="streamCategory"
              label="Stream Category"
            />
            <Field
              name="streamDescription"
              component={renderTextArea}
              id="streamDescription"
              label="Stream Description"
            />
            <button
              className="ui fluid large blue submit button"
              type="submit"
            >
              Create!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  // Title Validation
  if (!formValues.streamTitle) {
    errors.streamTitle = 'Your stream must have a title';
  }
  if (formValues.streamTitle && formValues.streamTitle.length < 4) {
    errors.streamTitle = 'Title must be at least four characters in length';
  }
  // Category Validation
  if (!formValues.streamCategory) {
    errors.streamCategory = 'Your stream must have a category';
  }
  // Description Validation
  if (!formValues.streamDescription) {
    errors.streamDescription = 'Your stream must have a description';
  }
  if (formValues.streamDescription && formValues.streamDescription.length < 8) {
    errors.streamDescription = 'Description must be at least 8 characters in length';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
