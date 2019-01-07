import React, { Component } from 'react';
import { array, bool, object } from 'prop-types';

class RowManager extends React.Component {
  // componentDidMount() {
  //   const rows = this.props.fields;
  //
  //   if (!this.props.initializeWithEmptyRow && !rows.length) {
  //     this.addRow();
  //   }
  // }

  componentDidUpdate() {
    // console.log('componentdidUpdate');
    // this.handleChange();
  }

  updateRowCount = (name, value, index) => {
    if (!!value && this.isLastRow(index) && this.allRequiredFieldsFilled(name, value)) {
      this.addRow();
    }

    if (this.shouldRemoveRow(name, value, index)) {
      setTimeout(() => this.removeRow(index), 0);
    }

    // if (typeof index === 'undefined') {
    //   this.removeEmptyRows();
    // } else if (this.shouldRemoveRow(name, value, index)) {
    //   this.removeRow(index);
    // }
  }

  addRow = () => {
    this.props.fields.push({});
  }

  removeRow = (index) => {
    this.props.fields.remove(index);
  }

  // removeEmptyRows = () => {
  //   const rows = this.props.fields;
  //   for (let i = 0; i < rows.length; i++) {
  //     if (this.shouldRemoveRow(i)) {
  //       return this.removeRow(i);
  //     }
  //   }
  // }

  allRequiredFieldsFilled = (updatedField, newValue) => {
    const rows = this.props.fields;
    const lastRow = rows.get(rows.length - 1);
    const mergedValues = {
      ...lastRow,
      [updatedField]: newValue
    };

    return this.props.requiredFields.every(requiredField => {
      if (typeof mergedValues[requiredField] === 'undefined') {
        return false;
      } else {
        return true;
      }
    });
  }

  shouldRemoveRow = (name, value, index) => {
    return this.isEmptyRow(name, value, index) &&
           this.hasMultipleRows() &&
           !this.isLastRow(index);
  }

  isEmptyRow = (updatedField, newValue, index) => {
    const rows = this.props.fields;
    const row = rows.get(index);
    const updatedRowValues = {
      ...row,
      [updatedField]: newValue
    };

    if (!row || this.props.allFields.every(field => !updatedRowValues[field])) {
      return true;
    } else {
      return false;
    }
  }

  isLastRow = (index) => {
    return index === this.props.fields.length - 1;
  }

  hasMultipleRows = () => {
    return this.props.fields.length > 1;
  }

  render() {
    // console.log('@RowManager render', this.props);
    console.log(this.props);
    const WrappedComponent = this.props.component;
    return <WrappedComponent {...this.props} updateRowCount={this.updateRowCount} />;
    // return <div>Hello World!</div>
  }
}

RowManager.propTypes = {
  fields: object.isRequired,
  requiredFields: array.isRequired,
  initializeWithEmptyRow: bool
};

RowManager.defaultProps = {
  initializeWithEmptyRow: true
};

export default RowManager;
