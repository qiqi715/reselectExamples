import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { injectIntl, intlShape } from 'react-intl';
import { createPropsSelector } from 'reselect-immutable-helpers';

import {
  subtotalSelector,
  taxSelector,
  totalSelector
} from './selectors';

export class reselectPage extends React.Component {
  render() {
    console.log('render 1');
    let {subtotal, tax, total} = this.props;
    return (
      <div>
        {
          `
            subtotal: ${subtotal},
            tax: ${tax},
            total: ${total},
          `
        }
      </div>
    )
  }
}

reselectPage.propTypes = {
  subtotal: PropTypes.number,
  tax: PropTypes.number,
  total: PropTypes.number
};

const mapStateToProps = createPropsSelector({
  subtotal: subtotalSelector,
  tax: taxSelector,
  total: totalSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

// export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(reselectPage));
export default connect(mapStateToProps, mapDispatchToProps)(reselectPage);
