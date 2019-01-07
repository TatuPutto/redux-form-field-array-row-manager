import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, FieldArray } from 'redux-form';
import renderUsers from './RFUsers';

const Form = () => {
  return (
    <div className="container" style={{marginTop: '10rem'}}>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <form>
            <FieldArray
              name="users"
              component={renderUsers}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

const WrappedForm = reduxForm({
  form: 'testForm'
})(Form);
//
export default connect(state => ({
  initialValues: { users: [{ firstName: 'Tatu', lastName: 'Putto' }] },
  // onSubmit: upload
}))(WrappedForm)
