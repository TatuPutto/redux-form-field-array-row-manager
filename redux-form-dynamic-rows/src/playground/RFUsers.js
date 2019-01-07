import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import withDynamicRows from '../withDynamicRows';

const renderUser = ({ input, index, updateRowCount }) => {
  const fieldName = input.name;
  return (
    <div key={fieldName}>
      <Field
        name={`${fieldName}.lastName`}
        type="text"
        component="input"
        onChange={(_, newValue) => updateRowCount('lastName', newValue, index)}
      />
      <Field
        name={`${fieldName}.firstName`}
        type="text"
        component="input"
        onChange={(_, newValue) => updateRowCount('firstName', newValue, index)}
      />
      <Field
        name={`${fieldName}.email`}
        type="text"
        component="input"
        onChange={(_, newValue) => updateRowCount('email', newValue, index)}
      />
      <Field
        name={`${fieldName}.phone`}
        type="text"
        component="input"
        onChange={(_, newValue) => updateRowCount('phone', newValue, index)}
      />
    </div>
  );
}

const RFUsers = (props) => {
  return (
    <Fragment>
      {props.fields.map((user, i) => (
        <Field
          name={user}
          index={i}
          updateRowCount={props.updateRowCount}
          component={renderUser}
        />
      ))}
    </Fragment>
  );
};

RFUsers.propTypes = {
  fields: PropTypes.object.isRequired
};
// export default RFUsers;
export default withDynamicRows(
  ['lastName', 'firstName', 'email', 'phone'],
  ['lastName', 'firstName', 'email'],
)(RFUsers);
// export default withDynamicRows(RFUsers);
