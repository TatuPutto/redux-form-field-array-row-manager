import React from 'react';
import PropTypes from 'prop-types';
import RowManager from './RowManager';

function withDynamicRows(allFields, requiredFields) {
  // return <RowManager />;

  // return class WithDynamicRows extends React.Component {
  //   static propTypes = {
  //     fields: PropTypes.object.isRequired,
  //     requiredFields: PropTypes.array.isRequired,
  //     initializeWithEmptyRow: PropTypes.bool
  //   };
  //
  //   static defaultProps = {
  //     initializeWithEmptyRow: true
  //   };
  //
  //   componentDidMount() {
  //     const rows = this.props.fields;
  //
  //     if (!this.props.initializeWithEmptyRow && !rows.length) {
  //       this.addRow();
  //     }
  //   }
  //
  //   componentDidUpdate() {
  //     this.handleChange();
  //   }
  //
  //   handleChange = () => {
  //     const rows = this.props.fields;
  //
  //     if (this.shouldAddNewRow()) {
  //       this.addRow();
  //     }
  //
  //     if (rows.length > 1) {
  //       this.removeEmptyRows();
  //     }
  //   }
  //
  //   addRow = () => {
  //     const rows = this.props.fields;
  //     rows.push({});
  //   }
  //
  //   removeEmptyRows = (rows) => {
  //     for (let i = 0; i < rows.length; i++) {
  //       if (this.shouldRemoveRow(i)) {
  //         return rows.remove(i);
  //       }
  //     }
  //   }
  //
  //   shouldRemoveRow = (index) => {
  //     return this.isEmptyRow(index) &&
  //            this.hasMultipleRows() &&
  //            !this.isLastRow(index);
  //   }
  //
  //   shouldAddNewRow = () => {
  //     const rows = this.props.fields;
  //     const lastRow = rows.get(rows.length - 1);
  //
  //     return this.props.requiredFields.every(requiredField => !!lastRow[requiredField]);
  //   }
  //
  //   isEmptyRow = (index) => {
  //     const rows = this.props.fields;
  //     const row = rows.get(index);
  //
  //     if (!row || this.props.requiredFields.every(requiredField => !row[requiredField])) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //
  //   isLastRow = (index) => {
  //     const rows = this.props.fields;
  //     return index === rows.length - 1;
  //   }
  //
  //   hasMultipleRows = () => {
  //     const rows = this.props.fields;
  //     return rows.length > 1;
  //   }
  //
  //   render() {
  //     console.log(WrappedComponent);
  //     console.log(this.props);
  //     return <WrappedComponent {...this.props} />;
  //   }
  // }

  return function withDynamicRowsHOC(WrappedComponent) {
    // console.log();
    // return <RowManager />
    return class extends React.Component {
      render() {
        // console.log(this.props);
        return (
          <RowManager
            {...this.props}
            allFields={allFields}
            requiredFields={requiredFields}
            component={WrappedComponent}
          />
        );
      }
    }
    // console.log(requiredFields);
    // console.log(arguments);
    // console.log(WrappedComponent);
    // // console.log(props);
    // return <WrappedComponent />;
  };
}

export default withDynamicRows;
